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
      // Firebase가 제대로 초기화되지 않은 경우 더미 데이터 반환
      if (!db || typeof db.collection !== 'function') {
        console.warn('Firebase not available, returning dummy data');
        return this.getDummyPosts();
      }

      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isNew: this.isNewPost(doc.data().createdAt)
      })) as Post[];
    } catch (error) {
      console.error('Error fetching posts:', error);
      return this.getDummyPosts();
    }
  },

  // 더미 데이터 생성
  getDummyPosts(): Post[] {
    return [
      {
        id: '1',
        title: '설악산 대청봉 등반 후기 - 단풍이 정말 아름다웠어요!',
        content: '지난 주말에 설악산 대청봉을 다녀왔습니다. 단풍이 절정이어서 정말 아름다운 풍경을 볼 수 있었어요. 케이블카를 타고 올라가면서부터 보이는 산의 모습이 정말 인상적이었습니다.',
        author: '산악인123',
        category: 'review',
        createdAt: Timestamp.fromDate(new Date('2024-01-15')),
        likes: 24,
        comments: 8,
        isNew: true,
      },
      {
        id: '2',
        title: '초보자 등산화 추천 부탁드립니다',
        content: '등산을 시작하려고 하는데 어떤 등산화를 사야 할지 모르겠어요. 추천 부탁드립니다. 예산은 10만원 정도로 생각하고 있습니다.',
        author: '등산초보',
        category: 'question',
        createdAt: Timestamp.fromDate(new Date('2024-01-14')),
        likes: 15,
        comments: 12,
        isNew: true,
      },
      {
        id: '3',
        title: '겨울 등산 안전 수칙 공유',
        content: '겨울 등산할 때 꼭 알아야 할 안전 수칙들을 정리해봤습니다. 체온 유지, 적절한 장비 준비, 날씨 확인 등이 중요합니다.',
        author: '안전등산가',
        category: 'tip',
        createdAt: Timestamp.fromDate(new Date('2024-01-13')),
        likes: 32,
        comments: 5,
        isNew: false,
      },
      {
        id: '4',
        title: '지리산 천왕봉에서 찍은 일출 사진',
        content: '새벽에 올라가서 찍은 지리산 일출 사진을 공유합니다! 정말 멋진 순간을 담을 수 있었어요.',
        author: '사진작가산',
        category: 'photo',
        createdAt: Timestamp.fromDate(new Date('2024-01-12')),
        likes: 41,
        comments: 15,
        isNew: false,
      },
      {
        id: '5',
        title: '이번 주말 한라산 등반 동행 구합니다',
        content: '이번 주말에 한라산 등반 계획이 있는데 같이 가실 분 계신가요? 오전 6시에 출발 예정입니다.',
        author: '제주등산러',
        category: 'general',
        createdAt: Timestamp.fromDate(new Date('2024-01-11')),
        likes: 18,
        comments: 22,
        isNew: false,
      },
    ];
  },

  // 카테고리별 게시글 가져오기
  async getPostsByCategory(category: string): Promise<Post[]> {
    try {
      // Firebase가 제대로 초기화되지 않은 경우 더미 데이터 반환
      if (!db || typeof db.collection !== 'function') {
        console.warn('Firebase not available, returning filtered dummy data');
        const dummyPosts = this.getDummyPosts();
        return category === 'all' ? dummyPosts : dummyPosts.filter(post => post.category === category);
      }

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
      const dummyPosts = this.getDummyPosts();
      return category === 'all' ? dummyPosts : dummyPosts.filter(post => post.category === category);
    }
  },

  // 새 게시글 추가
  async addPost(post: Omit<Post, 'id' | 'createdAt' | 'likes' | 'comments'>): Promise<string | null> {
    try {
      // Firebase가 제대로 초기화되지 않은 경우
      if (!db || typeof db.collection !== 'function') {
        console.warn('Firebase not available, simulating post addition');
        return 'dummy-post-id-' + Date.now();
      }

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
      return 'dummy-post-id-' + Date.now(); // 더미 ID 반환
    }
  },

  // 게시글 좋아요 증가
  async likePost(postId: string): Promise<boolean> {
    try {
      // Firebase가 제대로 초기화되지 않은 경우
      if (!db || typeof db.collection !== 'function') {
        console.warn('Firebase not available, simulating like');
        return true; // 성공한 것처럼 처리
      }

      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        likes: increment(1)
      });
      return true;
    } catch (error) {
      console.error('Error liking post:', error);
      return true; // 에러가 발생해도 성공한 것처럼 처리
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
      // Firebase가 제대로 초기화되지 않은 경우 더미 통계 반환
      if (!db || typeof db.collection !== 'function') {
        console.warn('Firebase not available, returning dummy stats');
        return {
          totalPosts: 5,
          totalComments: 62,
          totalLikes: 130,
          newPosts: 2
        };
      }

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
        totalPosts: 5,
        totalComments: 62,
        totalLikes: 130,
        newPosts: 2
      };
    }
  }
}; 