package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"time"
)

// BlogPost represents a blog post
type BlogPost struct {
	Title           string
	Content         string
	Author          string
	PublicationDate time.Time
}

// Sample Blog Posts for demonstration
var blogPosts = []BlogPost{
	{
		Title:           "My First Blog Post",
		Content:         "This is the content of my first blog post. It's pretty exciting!",
		Author:          "John Doe",
		PublicationDate: time.Now().Add(-24 * time.Hour), // Yesterday
	},
	{
		Title:           "Go Programming Adventures",
		Content:         "Exploring the world of Go!  It's a fantastic language.",
		Author:          "Jane Smith",
		PublicationDate: time.Now().Add(-48 * time.Hour), // Two days ago
	},
	{
		Title:           "A Quick Guide to Templates",
		Content:         "Using HTML templates in Go is a powerful way to generate dynamic content.",
		Author:          "John Doe",
		PublicationDate: time.Now(), // Today
	},
}

func blogPostHandler(w http.ResponseWriter, r *http.Request) {
	// Get the post ID from the URL (e.g., /blog/1).  We'll use 0 as a default if not found
	postIDStr := r.URL.Path[len("/blog/"):] // Extract everything after "/blog/"

	var postID int
	_, err := fmt.Sscan(postIDStr, &postID) // Convert string to integer
	if err != nil {
		postID = 0 // Default to the first post if there's an error parsing the ID
	}

	// Find the blog post by ID
	var selectedPost BlogPost
	if postID > 0 && postID <= len(blogPosts) {
		selectedPost = blogPosts[postID-1] // Adjust index to be zero-based
	} else {
		// If the post isn't found, display a "not found" message or redirect
		http.NotFound(w, r)
		return
	}

	// Parse the template.
	tmpl, err := template.ParseFiles("static/blog-post.html")
	if err != nil {
		log.Println("Error parsing template:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Execute the template with the blog post data
	err = tmpl.Execute(w, selectedPost)
	if err != nil {
		log.Println("Error executing template:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}
