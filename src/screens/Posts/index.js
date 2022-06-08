import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import { Button, Card } from 'react-native-paper';
import ApiClient from '../../api/ApiClient';
import { PostsSkeletonLoader } from '../../components';
import styles from './styles';

function Posts({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const openPost = ({ postId }) => {
    navigation.navigate('Post', { postId });
  };

  async function getData() {
    try {
      setLoading(true);
      const res = await ApiClient.posts.getPosts();
      setPosts(res?.data);
    } catch (err) {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = async () => {
    await getData();
  };

  const renderPost = ({ item }) => (
    <TouchableOpacity
      style={styles.flex}
      onPress={() => openPost({ postId: item?.id })}
    >
      <Card style={styles.cardContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text>{item?.body}</Text>
      </Card>
    </TouchableOpacity>
  );

  if (loading) {
    return <PostsSkeletonLoader />;
  }

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.noPostFoundText}>No Posts Found</Text>
      <TouchableOpacity onPress={() => getData()}>
        <Button style={{ width: 150 }} mode="contained">
          Try Again
        </Button>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flex}
        numColumns={2}
        keyExtractor={item => item?.id}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        data={posts}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
}

export default Posts;
