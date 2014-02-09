package scoreboard

import (
	"fmt"
	"math"
)

type Pagination struct {
	FirstLink string `json:"firstLink,omitempty"`
	NextLink  string `json:"nextLink,omitempty"`
	PrevLink  string `json:"prevLink,omitempty"`
	LastLink  string `json:"lastLink,omitempty"`
	FirstPage uint32 `json:"firstPage,omitempty"`
	NextPage  uint32 `json:"nextPage,omitempty"`
	PrevPage  uint32 `json:"prevPage,omitempty"`
	LastPage  uint32 `json:"lastPage,omitempty"`
}

func NewPagination(baseUrl string, page, pageSize uint32, count uint64) Pagination {
	var (
		first     uint32 = 0
		firstLink        = ""
		next      uint32 = 0
		nextLink         = ""
		prev      uint32 = 0
		prevLink         = ""
		last      uint32 = 0
		lastLink         = ""
	)

	if page < 1 {
		page = 1
	}

	numPages := uint32(math.Ceil(float64(count) / float64(pageSize)))

	if page > numPages {
		page = numPages
	}

	if page > 1 {
		first = 1
		firstLink = baseUrl
	}

	if page < numPages {
		next = page + 1
		nextLink = fmt.Sprintf("%v?page=%d", baseUrl, next)
		last = numPages
		lastLink = fmt.Sprintf("%v?page=%d", baseUrl, last)
	}

	if page > 1 {
		prev = page - 1
		if prev > 1 {
			prevLink = fmt.Sprintf("%v?page=%d", baseUrl, prev)
		} else {
			prevLink = baseUrl
		}
	}

	return Pagination{
		FirstLink: firstLink,
		NextLink:  nextLink,
		PrevLink:  prevLink,
		LastLink:  lastLink,
		FirstPage: first,
		NextPage:  next,
		PrevPage:  prev,
		LastPage:  last,
	}
}
