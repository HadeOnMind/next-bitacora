export interface Sketchbook {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  entries: Entry[];
}

export interface Entry {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  tags?: string[];
  createdAt: string;
}
