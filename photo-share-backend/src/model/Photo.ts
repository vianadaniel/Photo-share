export interface PhotoInputDTO {
       subtitle: string,
       author: string,
       file: string,
       tags: string,
       collection: string
}

export interface PhotoOutputDTO {
  id: string,
  subtitle: string,
  author: string,
  date: string,
  file: string,
  tags: string,
  collection: string,
  users_id: string
}


export class Photo {
    constructor(
      private id: string,
      private subtitle: string,
      private author: string,
      private date: string,
      private file: string,
      private tags: string,
      private collection: string,
      private users_id: string

    ) {}
  
    public getId(): string {
      return this.id;
    }
  
    public getSubtitle(): string {
      return this.subtitle;
    }
  
    public getAuthor(): string {
      return this.author;
    }
  
    public getDate(): string {
      return this.date;
    }
  
    public getFile(): string {
      return this.file;
    }
  
    public getTags(): string {
    return this.tags;
  }
  
    public getCollection(): string {
    return this.collection;
  }

    public getUsers_id(): string  {
    return this.users_id;
  }
}