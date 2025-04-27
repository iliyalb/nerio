package main

import (
	"fmt"
	"log"
	"net/http"
	"net/smtp"
)

func contactHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	name := r.FormValue("name")
	subject := r.FormValue("subject")
	email := r.FormValue("email")
	message := r.FormValue("message")

	if name == "" || subject == "" || email == "" || message == "" {
		http.Error(w, "All fields are required", http.StatusBadRequest)
		return
	}

	// Construct the email body
	emailBody := fmt.Sprintf("Name: %s\nSubject: %s\nEmail: %s\nMessage:\n%s", name, subject, email, message)

	// Send the email
	err := sendEmail(email, subject, emailBody)
	if err != nil {
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		log.Println("Error sending email:", err)
		return
	}

	// Redirect or display a success message
	http.Redirect(w, r, "../index.html#contact-us", http.StatusSeeOther)

}

func sendEmail(to string, subject string, body string) error {

	msg := []byte(fmt.Sprintf("To: %s\r\nSubject: %s\r\n\r\n%s", to, subject, body))

	auth := smtp.PlainAuth("", "username", "password", "host")

	err := smtp.SendMail("smtp.gmail.com:587", auth, "example@gmail.com", []string{to}, msg)
	if err != nil {
		return err
	}

	return nil
}
