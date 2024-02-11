package main

import (
	"context"

	"github.com/AdamMcAdamson/Rare-Puppers/handler"
	"github.com/AdamMcAdamson/Rare-Puppers/model"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// Echo instance
	app := echo.New()

	// Middleware
	app.Use(middleware.Logger())
	app.Use(middleware.Recover())
	app.Use(withUser)

	userHandler := handler.UserHandler{}

	// n := 0

	// Routes
	app.Static("/", "assets")
	app.GET("/", userHandler.HandlerUserShow)
	// app.POST("/clicked", userHandler.HandlerUserClicked)

	// Start server
	app.Logger.Fatal(app.Start("127.0.0.1:8080"))
}

func withUser(next echo.HandlerFunc) echo.HandlerFunc {

	return func(c echo.Context) error {
		ctx := context.WithValue(c.Request().Context(), model.UserCtxKey(), model.User{
			Email: "email@example.com",
			Id:    1,
		})
		c.SetRequest(c.Request().WithContext(ctx))
		return next(c)
	}
}
