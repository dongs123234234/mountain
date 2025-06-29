'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { postsService, statsService, Post } from '../../../lib/firebase-services';
import { Timestamp } from 'firebase/firestore';

const CommunityPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isWriting, setIsWriting] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalComments: 0,
    totalLikes: 0,
    newPosts: 0
  });
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'general',
  });

  const categories = [
    { id: 'all', name: '전체', icon: '📋' },
    { id: 'review', name: '등산 후기', icon: '📝' },
    { id: 'question', name: 'Q&A', icon: '❓' },
    { id: 'general', name: '자유 게시판', icon: '💬' },
    { id: 'photo', name: '사진 공유', icon: '📷' },
    { id: 'tip', name: '등산 팁', icon: '💡' },
  ];

  // 데이터 로드 useEffect
  useEffect(() => {
    loadData();
    loadStats();
  }, []);

  // 카테고리 변경 시 데이터 다시 로드
  useEffect(() => {
    loadPostsByCategory();
  }, [selectedCategory]);

  const loadData = async () => {
    setLoading(true);
    try {
      const postsData = await postsService.getAllPosts();
      setPosts(postsData);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadPostsByCategory = async () => {
    setLoading(true);
    try {
      const postsData = await postsService.getPostsByCategory(selectedCategory);
      setPosts(postsData);
    } catch (error) {
      console.error('Error loading posts by category:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const statsData = await statsService.getCommunityStats();
      setStats(statsData);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const filteredPosts = posts;

  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || '기타';
  };

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.icon || '📝';
  };

  const handleSubmitPost = async () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      try {
        const postId = await postsService.addPost({
          title: newPost.title,
          content: newPost.content,
          author: '현재사용자',
          category: newPost.category,
        });
        
        if (postId) {
          setNewPost({ title: '', content: '', category: 'general' });
          setIsWriting(false);
          // 데이터 다시 로드
          loadPostsByCategory();
          loadStats();
        }
      } catch (error) {
        console.error('Error adding post:', error);
      }
    }
  };

  const handleLike = async (postId: string) => {
    if (!postId) return;
    
    try {
      const success = await postsService.likePost(postId);
      if (success) {
        // 좋아요 업데이트를 위해 데이터 다시 로드
        loadPostsByCategory();
        loadStats();
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    return timestamp.toDate().toLocaleDateString('ko-KR');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      
      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4">
          {/* 페이지 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">🏔️ 등산 커뮤니티</h1>
            <p className="text-gray-300">등산을 사랑하는 사람들과 소통하고 정보를 공유하세요!</p>
          </div>

          {/* 통계 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{stats.totalPosts}</div>
              <div className="text-gray-300">총 게시글</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{stats.totalLikes}</div>
              <div className="text-gray-300">총 좋아요</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{stats.totalComments}</div>
              <div className="text-gray-300">총 댓글</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.newPosts}</div>
              <div className="text-gray-300">새 게시글</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 카테고리 사이드바 */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">카테고리</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <span className="mr-3">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">커뮤니티 규칙</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• 서로 존중하며 소통해주세요</li>
                  <li>• 등산 관련 내용을 공유해주세요</li>
                  <li>• 개인정보는 공유하지 말아주세요</li>
                  <li>• 광고성 글은 금지입니다</li>
                  <li>• 안전한 등산 문화를 만들어가요</li>
                </ul>
              </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="lg:col-span-3">
              {/* 글쓰기 버튼 */}
              <div className="mb-6">
                <button
                  onClick={() => setIsWriting(!isWriting)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {isWriting ? '취소' : '✍️ 글쓰기'}
                </button>
              </div>

              {/* 글쓰기 폼 */}
              {isWriting && (
                <div className="bg-gray-800 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">새 글 작성</h3>
                  <div className="space-y-4">
                    <div>
                      <select
                        value={newPost.category}
                        onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                      >
                        {categories.filter(cat => cat.id !== 'all').map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="내용을 입력하세요"
                        rows={6}
                        value={newPost.content}
                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none resize-vertical"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={handleSubmitPost}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        게시하기
                      </button>
                      <button
                        onClick={() => setIsWriting(false)}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 게시글 목록 */}
              <div className="space-y-4">
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="text-gray-400">로딩 중...</div>
                  </div>
                ) : filteredPosts.length === 0 ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="text-gray-400">게시글이 없습니다.</div>
                  </div>
                ) : (
                  filteredPosts.map((post) => (
                    <div key={post.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{getCategoryIcon(post.category)}</span>
                          <span className="text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded">
                            {getCategoryName(post.category)}
                          </span>
                          {post.isNew && (
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded font-medium">
                              NEW
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-400">{formatDate(post.createdAt)}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 cursor-pointer">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-2">{post.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>작성자: {post.author}</span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => post.id && handleLike(post.id)}
                            className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors"
                            disabled={!post.id}
                          >
                            <span>❤️</span>
                            <span>{post.likes}</span>
                          </button>
                          <div className="flex items-center space-x-1 text-gray-400">
                            <span>💬</span>
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPage; 