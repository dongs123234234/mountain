import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  where, 
  updateDoc, 
  doc, 
  increment,
  Timestamp,
  DocumentData,
  QueryConstraint
} from 'firebase/firestore';
import { db } from './firebase';

export interface Post {
  id?: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: Timestamp;
  likes: number;
  comments: number;
  isNew?: boolean;
}

export interface Comment {
  id?: string;
  postId: string;
  content: string;
  author: string;
  createdAt: Timestamp;
}

// 게시글 관련 함수들
export const postsService = {
  // 모든 게시글 가져오기
  async getAllPosts(): Promise<Post[]> {
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isNew: this.isNewPost(doc.data().createdAt)
      })) as Post[];
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  // 카테고리별 게시글 가져오기
  async getPostsByCategory(category: string): Promise<Post[]> {
    try {
      const constraints: QueryConstraint[] = [orderBy('createdAt', 'desc')];
      if (category !== 'all') {
        constraints.unshift(where('category', '==', category));
      }
      
      const q = query(collection(db, 'posts'), ...constraints);
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isNew: this.isNewPost(doc.data().createdAt)
      })) as Post[];
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      return [];
    }
  },

  // 새 게시글 추가
  async addPost(post: Omit<Post, 'id' | 'createdAt' | 'likes' | 'comments'>): Promise<string | null> {
    try {
      const newPost = {
        ...post,
        createdAt: Timestamp.now(),
        likes: 0,
        comments: 0
      };
      const docRef = await addDoc(collection(db, 'posts'), newPost);
      return docRef.id;
    } catch (error) {
      console.error('Error adding post:', error);
      return null;
    }
  },

  // 게시글 좋아요 증가
  async likePost(postId: string): Promise<boolean> {
    try {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        likes: increment(1)
      });
      return true;
    } catch (error) {
      console.error('Error liking post:', error);
      return false;
    }
  },

  // 게시글이 새로운지 확인 (3일 이내)
  isNewPost(createdAt: Timestamp): boolean {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    return createdAt.toDate() > threeDaysAgo;
  }
};

// 댓글 관련 함수들
export const commentsService = {
  // 특정 게시글의 댓글 가져오기
  async getCommentsByPostId(postId: string): Promise<Comment[]> {
    try {
      const q = query(
        collection(db, 'comments'), 
        where('postId', '==', postId),
        orderBy('createdAt', 'asc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Comment[];
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  },

  // 새 댓글 추가
  async addComment(comment: Omit<Comment, 'id' | 'createdAt'>): Promise<string | null> {
    try {
      const newComment = {
        ...comment,
        createdAt: Timestamp.now()
      };
      const docRef = await addDoc(collection(db, 'comments'), newComment);
      
      // 게시글의 댓글 수 증가
      const postRef = doc(db, 'posts', comment.postId);
      await updateDoc(postRef, {
        comments: increment(1)
      });
      
      return docRef.id;
    } catch (error) {
      console.error('Error adding comment:', error);
      return null;
    }
  }
};

// 통계 관련 함수들
export const statsService = {
  // 커뮤니티 통계 가져오기
  async getCommunityStats() {
    try {
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      const commentsSnapshot = await getDocs(collection(db, 'comments'));
      
      let totalLikes = 0;
      let newPostsCount = 0;
      
      postsSnapshot.forEach(doc => {
        const data = doc.data();
        totalLikes += data.likes || 0;
        if (postsService.isNewPost(data.createdAt)) {
          newPostsCount++;
        }
      });
      
      return {
        totalPosts: postsSnapshot.size,
        totalComments: commentsSnapshot.size,
        totalLikes,
        newPosts: newPostsCount
      };
    } catch (error) {
      console.error('Error fetching community stats:', error);
      return {
        totalPosts: 0,
        totalComments: 0,
        totalLikes: 0,
        newPosts: 0
      };
    }
  }
}; 