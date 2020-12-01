export interface PhotoInputDTO {
       subtitle: string,
       author: string,
       file: string,
       tags: string,
       collection: string
}


export class Photo {
    constructor(
      private id: string,
      private subtitle: string,
      private author: string,
      private date: number,
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
  
    public getDate(): number {
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