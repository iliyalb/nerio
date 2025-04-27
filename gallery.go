package main

import (
	"html/template"
	"net/http"
)

func galleryHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("assets/gallery.html"))
	tmpl.Execute(w, nil)
}
