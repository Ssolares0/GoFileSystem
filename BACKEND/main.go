package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {

	router := mux.NewRouter()
	router.HandleFunc("/", inicio).Methods("GET")
	handler := allowCORS(router)
	fmt.Println("Servidor corriendo en http://localhost:3001")
	log.Fatal(http.ListenAndServe(":3001", handler))
}

func inicio(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Bienvenido a la API de Go</h1>")
}

func allowCORS(hancler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		//handler.ServeHTTP(w, r)
	})
}
