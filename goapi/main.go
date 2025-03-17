package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/saintgits/database"
	"github.com/saintgits/models"
	"github.com/saintgits/routes"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "*",
		AllowHeaders: "Content-Type,Authorization",
	}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	db, err := database.NewConnection()
	if err != nil {
		log.Fatal("Could not load database")
	}

	models.MigrateUser(db)

	routes.UserRoutes(db, app)

	app.Listen("0.0.0.0:8080")
}
