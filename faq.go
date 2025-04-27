package main

import (
	"html/template"
	"net/http"
)

func faqHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("assets/faq.html"))
	tmpl.Execute(w, nil)
}
