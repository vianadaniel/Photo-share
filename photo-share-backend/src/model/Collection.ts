export interface CollectionInputDTO {
    title: string,
    subtitle: string,
    image: string
    
}

export interface CollectionOutputDTO {
id: string,
title: string,
subtitle: string,
image: string

}


export class Collection {
 constructor(
   private id: string,
   private title: string,
   private subtitle: string,
   private image: string

 ) {}

 public getId(): string {
   return this.id;
 }

 public getSubtitle(): string {
   return this.subtitle;
 }

 public getTitle(): string {
   return this.title;
 }

 public getImage(): string {
   return this.image;
 }

 

}