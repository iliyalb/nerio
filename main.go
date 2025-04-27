package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {
	http.Handle("/static/",
		http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("index.html"))
		tmpl.Execute(w, nil)
	})

	http.HandleFunc("/blog", blogPostHandler)
	http.HandleFunc("/contact", contactUsHandler)
	http.HandleFunc("/faq", faqHandler)
	http.HandleFunc("/gallery", galleryHandler)

	log.Println("Server running on 8000...")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
