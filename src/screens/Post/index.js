import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { Avatar } from 'react-native-paper';
import { PostSkeletonLoader, SearchBar, SearchByMenu } from '../../components';
import ApiClient from '../../api/ApiClient';
import { SEARCH_BY_MENU } from '../../utils/Constants';
import styles from './styles';

function Post({ route }) {
  const { postId } = route.params;
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState(SEARCH_BY_MENU.ALL);

  async function getPostData() {
    try {
      setLoading(true);
      const res = await ApiClient.posts.getPost(postId);
      setPost(res?.data);
    } catch (err) {
      setLoading(true);
    }
  }

  async function getCommentsData() {
    try {
      setLoading(true);
      const res = await ApiClient.comments.getPostComments(postId);
      setComments(res?.data);
    } catch (err) {
      setLoading(true);
    } finally {
      setLoading(false);
    }
  }

  const onRefresh = async () => {
    await getCommentsData();
  };

  useEffect(() => {
    getPostData();
    getCommentsData();
  }, []);

  const renderComment = ({ item }) => (
    <View key={item?.id} style={styles.commentsContainer}>
      <View style={styles.userContainer}>
        <Avatar.Icon size={30} icon="account" style={{ marginRight: 10 }} />
        <View>
          <Text style={styles.nameText}>{item?.name}</Text>
          <Text style={styles.emailText}>{item?.email}</Text>
        </View>
      </View>
      <Text>{item?.body}</Text>
    </View>
  );

  if (loading) {
    return <PostSkeletonLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.postContainer}>
          <Text style={styles.title}>{post?.title}</Text>
          <Text>{post?.body}</Text>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.commentText}>
            {`${
              searchQuery?.length > 0
                ? filteredComments?.length
                : comments?.length
            } Comments`}
          </Text>
          <View />
          <SearchByMenu searchBy={searchBy} setSearchBy={setSearchBy} />
        </View>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          comments={comments}
          setFilteredComments={setFilteredComments}
          searchBy={searchBy}
        />

        <FlatList
          style={styles.flatListStyle}
          data={searchQuery?.length > 0 ? filteredComments : comments}
          renderItem={renderComment}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
        />
      </View>
      <View />
    </View>
  );
}

export default Post;
