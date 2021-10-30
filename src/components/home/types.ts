export interface UserFeed {
  feeds: Feed[];
}

export interface Feed {
  id: string;
  post: string;
  likes: string;
  user_id: string;
}

export interface UserProfile {
  users: User[];
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  short_bio: string;
  long_bio: string;
  profile_picture: string;
  website_url: string;
  twitter_handle: string;
  instagram: string;
  location: string;
  following: string;
  followers: string;
}
