package main

import (
	"html/template"
	"net/http"
)

func contactUsHandler(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("assets/contact-us.html"))
	tmpl.Execute(w, nil)
}
