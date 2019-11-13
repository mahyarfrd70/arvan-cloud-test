import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './style.css'

let conditionLoopNumber = (paginationSize , page)=>{
    if(paginationSize > 5){
        return (
            page > 3  && 
            paginationSize - page > 3 ? 
            page + 2 :  
            page <= 3 ? 5 : 
            paginationSize - page <= 3 && 
            paginationSize
        )
    }else{
        return paginationSize
    }
}

let startLoopNumber = (paginationSize , page)=>{
    if(paginationSize > 5){
        return (
            page > 3  && 
            paginationSize - page > 3 ? 
            page - 3 :  
            page <= 3 ? 0 : 
            paginationSize - page <= 3 && 
            paginationSize -5
        )
    }else{
        return 0
    }
}

let createPages = (totalData, pageSize, page) => {
    let pages = []
    let paginationSize = Math.ceil(totalData / pageSize)
    if (paginationSize > 5 &&  page > 3) {
        let prevDot = <PaginationItem>
            <PaginationLink>
                ...
            </PaginationLink>
        </PaginationItem>
        pages = [prevDot, ...pages]
    }
    for (let i = startLoopNumber(paginationSize , page) ; i < conditionLoopNumber( paginationSize , page ) ; i++) {
        let elem = <NavLink to={i == 0 ? `/articles` :  `/articles/page/${i+1}`}>
            <PaginationItem active={page == i + 1}>
                <PaginationLink>
                    {i + 1}
                </PaginationLink>
            </PaginationItem>
        </NavLink>
        pages = [...pages, elem]
    }
    if (paginationSize > 5 && paginationSize - page > 3) {
        let nextDot = <PaginationItem>
            <PaginationLink>
                ...
            </PaginationLink>
        </PaginationItem>
        pages = [...pages, nextDot]
    }
    return pages
}

export default function CushrefmPagination({ totalData, pageSize, page, size, ...props }) {
    return (
        <Pagination size={size} aria-label="Page navigation example">
            <NavLink to={Number(page) == 2 ? '/articles' : `/articles/page/${Number(page) - 1}`}>
                <PaginationItem disabled={Number(page) == 1}>
                    <PaginationLink previous />
                </PaginationItem>
            </NavLink>
            {createPages(Number(totalData), Number(pageSize), Number(page))}
            <NavLink to={`/articles/page/${Number(page) + 1}`}>
                <PaginationItem disabled={Number(page) == Number(totalData)/Number(pageSize)}>
                    <PaginationLink next/>
                </PaginationItem>
            </NavLink>
        </Pagination>
    )
}
