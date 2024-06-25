import { api } from '../services/api'
import { supabase } from './supabase-client';

export const getPosts = async () => {
    const {data} = await api.get('/posts');

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
  try {
    let { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getPostBySlug:', error);
    return null;
  }
};
