package main

import (
	"html/template"
	"net/http"
)

func blogPostHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("static/blog-post.html"))
	tmpl.Execute(w, nil)
}
