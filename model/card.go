package model

import "strconv"

type Card struct {
	Title       string
	Description string
	ImageUrl    string
	Strength    int
	Health      int
	ClassType   string
}

type CardP struct {
	Title       string
	Description string
	ImageUrl    string
	Strength    string
	Health      string
	ClassType   string
}

func (c Card) ToProps() CardP {
	return CardP{
		Title:       c.Title,
		Description: c.Description,
		ImageUrl:    c.ImageUrl,
		Strength:    strconv.Itoa(c.Strength),
		Health:      strconv.Itoa(c.Health),
		ClassType:   c.ClassType,
	}
}
