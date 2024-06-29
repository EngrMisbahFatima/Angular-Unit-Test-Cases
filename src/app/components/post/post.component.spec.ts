import { Post } from "src/app/models/Post";
import { PostComponent } from "./post.component";
import { Component } from "@angular/core";
import { of } from "rxjs";

let mockerPostService : any;
let component : any;
let posts : Post[] = [];
beforeEach(() => {
    posts = [
        {
            userId: 123,
            id: 1,
            title: 'Post 1',
            body: 'Body 1'
        },
        {
            userId: 124,
            id: 2,
            title: 'Post 2',
            body: 'Body 2'
        },
        {
            userId: 125,
            id: 3,
            title: 'Post 3',
            body: 'Body 3'
        }
    ];
    mockerPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    component = new PostComponent(mockerPostService);
});

describe("post component", () => {
     beforeEach(()=>{
        mockerPostService.deletePost.and.returnValue(of(true));
        component.posts = posts;
        component.deletePost(posts[1]);
    });
    it('should delete post', ()=> {
        expect(component.posts.length).toBe(2);
    });

    it('should call delete post method only once', ()=> {
        expect(mockerPostService.deletePost).toHaveBeenCalledTimes(1);
    });

    it('should call delete the actual post in Posts', ()=> {
        for( let post of component.posts){
            expect(post).not.toEqual(posts[1]);
        }
    });
});