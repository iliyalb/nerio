package main

import (
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"strings"
)

// Email Configuration
const (
	emailHost     = "smtp.gmail.com"
	emailPort     = 587 // TLS/STARTTLS
	emailUsername = "example@gmail.com"
	emailPassword = "password"
	fromAddress   = "example@gmail.com"
)

func contactUsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	name := strings.TrimSpace(r.FormValue("name")) // Trim whitespace
	subject := strings.TrimSpace(r.FormValue("subject"))
	email := strings.TrimSpace(r.FormValue("email"))
	message := strings.TrimSpace(r.FormValue("message"))

	// Validation
	if name == "" || subject == "" || email == "" || message == "" {
		http.Error(w, "All fields are required", http.StatusBadRequest)
		return
	}

	// Email validation
	if !strings.ContainsAny(email, "@") {
		http.Error(w, "Invalid email address", http.StatusBadRequest)
		return
	}

	// Construct the email body
	emailBody := fmt.Sprintf("Name: %s\nSubject: %s\nEmail: %s\nMessage:\n%s", name, subject, email, message)

	// Send the email
	err := sendEmail("recipient@example.com", subject, emailBody)
	if err != nil {
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		log.Println("Error sending email:", err)
		return
	}

	// Redirect or display a success message
	http.Redirect(w, r, "../index.html#contact-us", http.StatusSeeOther)

}

func sendEmails(to string, subject string, body string) error {
	auth := smtp.PlainAuth("", emailUsername, emailPassword, emailHost)

	msg := []byte(fmt.Sprintf("To: %s\r\nSubject: %s\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n%s", to, subject, body))

	err := smtp.SendMail(emailHost+":587", auth, fromAddress, []string{to}, msg)
	if err != nil {
		return err
	}

	return nil
}
