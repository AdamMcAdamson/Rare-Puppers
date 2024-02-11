package handler

import (
	"github.com/AdamMcAdamson/Rare-Puppers/view/user"
	"github.com/labstack/echo/v4"
)

var n = 0

type UserHandler struct{}

func (h UserHandler) HandlerUserShow(c echo.Context) error {
	return render(c, user.Show())
}

// func (h UserHandler) HandlerUserClicked(c echo.Context) error {
// 	n++
// 	return render(c, user.Clicked(n))
// }
