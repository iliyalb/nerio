package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"
)

// FAQEntry represents a single Frequently Asked Question
type FAQEntry struct {
	ID          int
	Question    string
	Answer      string
	Category    string // Optional: For grouping FAQs
	IsPublished bool   // Whether the FAQ is visible to users
}

var faqEntries []FAQEntry = make([]FAQEntry, 0) // In-memory storage
var nextID int = 1                              // Simple ID generator

// InitializeFAQs populates the in-memory store with some sample FAQs
func InitializeFAQs() {
	faqEntries = []FAQEntry{
		{ID: 1, Question: "What is your return policy?", Answer: "We offer a 30-day money-back guarantee.", Category: "Returns", IsPublished: true},
		{ID: 2, Question: "How do I track my order?", Answer: "You can track your order using the tracking number provided in your shipping confirmation email.", Category: "Shipping", IsPublished: true},
		{ID: 3, Question: "Do you offer international shipping?", Answer: "Yes, we ship to most countries worldwide.  See our Shipping Policy for details.", Category: "Shipping", IsPublished: false}, //Unpublished example
	}
	nextID = 4
}

// AddFAQ adds a new FAQ entry to the store
func AddFAQ(question string, answer string, category string) (int, error) {
	if question == "" || answer == "" {
		return 0, fmt.Errorf("question and answer cannot be empty")
	}
	newEntry := FAQEntry{ID: nextID, Question: question, Answer: answer, Category: category, IsPublished: true}
	faqEntries = append(faqEntries, newEntry)
	nextID++
	return newEntry.ID, nil
}

// GetFAQ retrieves an FAQ entry by its ID
func GetFAQ(id int) (*FAQEntry, error) {
	for i := range faqEntries {
		if faqEntries[i].ID == id {
			return &faqEntries[i], nil
		}
	}
	return nil, fmt.Errorf("FAQ with ID %d not found", id)
}

// UpdateFAQ updates an existing FAQ entry
func UpdateFAQ(id int, question string, answer string, category string, isPublished bool) error {
	for i := range faqEntries {
		if faqEntries[i].ID == id {
			faqEntries[i].Question = question
			faqEntries[i].Answer = answer
			faqEntries[i].Category = category
			faqEntries[i].IsPublished = isPublished
			return nil
		}
	}
	return fmt.Errorf("FAQ with ID %d not found", id)
}

// DeleteFAQ removes an FAQ entry by its ID
func DeleteFAQ(id int) error {
	for i := range faqEntries {
		if faqEntries[i].ID == id {
			faqEntries = append(faqEntries[:i], faqEntries[i+1:]...) // Remove element
			return nil
		}
	}
	return fmt.Errorf("FAQ with ID %d not found", id)
}

// ListFAQs returns all FAQ entries optionally filtered by category
func ListFAQs(category string) ([]FAQEntry, error) {
	var result []FAQEntry
	for _, entry := range faqEntries {
		if category == "" || entry.Category == category {
			if entry.IsPublished { //Only show published FAQs
				result = append(result, entry)
			}

		}
	}
	return result, nil
}

// SearchFAQs searches for FAQs matching a given keyword in question or answer
func SearchFAQs(keyword string) ([]FAQEntry, error) {
	var results []FAQEntry
	keyword = strings.ToLower(keyword) // Case-insensitive search
	for _, entry := range faqEntries {
		if entry.IsPublished && (strings.Contains(strings.ToLower(entry.Question), keyword) || strings.Contains(strings.ToLower(entry.Answer), keyword)) {
			results = append(results, entry)
		}
	}
	return results, nil
}

// GetFAQCount returns the total number of FAQs
func GetFAQCount() int {
	return len(faqEntries)
}

// GetPublishedFAQCount returns the count of published FAQs
func GetPublishedFAQCount() int {
	count := 0
	for _, entry := range faqEntries {
		if entry.IsPublished {
			count++
		}
	}
	return count
}

// PublishFAQ sets the publication status of an FAQ to true
func PublishFAQ(id int) error {
	return UpdateFAQ(id, "", "", "", true) // Reuse UpdateFAQ for simplicity
}

// UnpublishFAQ sets the publication status of an FAQ to false
func UnpublishFAQ(id int) error {
	return UpdateFAQ(id, "", "", "", false) // Reuse UpdateFAQ for simplicity
}

// GetCategoryList returns a list of unique categories used in FAQs
func GetCategoryList() []string {
	categories := make(map[string]bool)
	for _, entry := range faqEntries {
		if entry.Category != "" {
			categories[entry.Category] = true
		}
	}
	result := make([]string, 0, len(categories))
	for category := range categories {
		result = append(result, category)
	}
	return result
}

// FAQHandler serves the FAQ page.  This is a placeholder for your actual view logic
func FAQHandler(w http.ResponseWriter, r *http.Request) {
	category := r.URL.Query().Get("category") // Get category from URL parameter
	faqs, err := ListFAQs(category)
	if err != nil {
		log.Println("Error listing FAQs:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(w, "<h1>Frequently Asked Questions</h1>")
	if len(faqs) == 0 {
		fmt.Fprint(w, "<p>No FAQs found.</p>")
		return
	}

	for _, faq := range faqs {
		fmt.Fprintf(w, "<h2>%s</h2>\n<p>%s</p>\n", faq.Question, faq.Answer)
	}
}

// SearchFAQHandler handles the search functionality for FAQs
func SearchFAQHandler(w http.ResponseWriter, r *http.Request) {
	keyword := r.URL.Query().Get("q") // Get keyword from URL parameter

	if keyword == "" {
		http.Error(w, "Please provide a search term.", http.StatusBadRequest)
		return
	}

	faqs, err := SearchFAQs(keyword)
	if err != nil {
		log.Println("Error searching FAQs:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Render the search results
	fmt.Fprintf(w, "<h1>Search Results for '%s'</h1>", keyword)
	if len(faqs) == 0 {
		fmt.Fprint(w, "<p>No FAQs found matching your search term.</p>")
		return
	}

	for _, faq := range faqs {
		fmt.Fprintf(w, "<h2>%s</h2><p>%s</p>", faq.Question, faq.Answer)
	}
}

// AdminFAQHandler for admin interface
func AdminFAQHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "<h1>Admin FAQ Interface</h1>") // Replace with actual admin UI
}
