package main

import (
	"BACKEND/Estructuras"
	"bufio"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gorilla/mux"
)

var logeado = false

type DatosEntrada struct {
	Comandos []string `json:"comandos"`
}

func main() {

	router := mux.NewRouter()
	router.HandleFunc("/", inicio).Methods("GET")
	router.HandleFunc("/analizador", analizador).Methods("POST")

	handler := allowCORS(router)
	fmt.Println("Servidor corriendo en http://localhost:3001")
	log.Fatal(http.ListenAndServe(":3001", handler))
}

func allowCORS(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		handler.ServeHTTP(w, r)
	})
}

func inicio(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Bienvenido a la API de Go</h1>")
}

func analizador(w http.ResponseWriter, r *http.Request) {
	var datos DatosEntrada
	err := json.NewDecoder(r.Body).Decode(&datos)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = guardarDatos("./prueba.script", datos)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Ejecutar el archivo de script
	Open_File("./prueba.script")
	fmt.Fprintf(w, "Script ejecutado exitosamente")

}
func guardarDatos(archivo string, datos DatosEntrada) error {
	// Abrir o crear el archivo
	file, err := os.Create(archivo)
	if err != nil {
		return err
	}
	defer file.Close()

	// Escribir los comandos en el archivo
	for _, comando := range datos.Comandos {
		_, err := file.WriteString(strings.TrimSpace(comando) + "\n")
		if err != nil {
			return err
		}
	}

	return nil
}

func Open_File(path string) {

	readFile, err := os.Open(path)
	if err != nil {
		log.Fatal(err)
	}
	fileScanner := bufio.NewScanner(readFile)
	fileScanner.Split(bufio.ScanLines)
	var lines []string
	for fileScanner.Scan() {
		lines = append(lines, fileScanner.Text())
	}
	readFile.Close()
	for _, line := range lines {
		//fmt.Println("The name is:", line)
		Estructuras.Analyze(line)

	}
}

func Obtener_Discos(w http.ResponseWriter, r *http.Request) {
	discos, err := ioutil.ReadDir("./MIA")
	if err != nil {
		// Manejar el error, por ejemplo, devolver un código de estado HTTP 500
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	// Crear una lista de nombres de discos
	nombresDiscos := make([]string, 0, len(discos))
	for _, disco := range discos {
		nombresDiscos = append(nombresDiscos, disco.Name())
	}

	// Establecer el tipo de contenido a JSON
	w.Header().Set("Content-Type", "application/json")

	// Convertir a JSON y enviar la respuesta
	json.NewEncoder(w).Encode(nombresDiscos)
}
