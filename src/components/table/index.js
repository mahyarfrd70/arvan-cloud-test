import React from 'react'
import { Table } from 'reactstrap'
import Pagination from '../pagination'
import './style.css'

export default function index({ headerOptions, data, pageSize, page, totalData, ...props }) {
    let calculateIndex = (index, page , pageSize)=>{
        let pageNum =  page-1
        let indexNum = index+1
        return pageSize*pageNum+indexNum
    }
    return (
        <>
            <Table responsive>
                <tr>
                    {headerOptions.map(item => (
                        <th>{item.label}</th>
                    ))}
                </tr>
                {data.map((item, index) => (
                    <tr>
                        {headerOptions.map(option => (
                            <td style={option.style}>
                                {option.rendered ?
                                    option.rendered(item[option.key], item, calculateIndex(index , page , pageSize)) :
                                    <p>{item[option.key]}</p>
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </Table>
            <div className='pagiination-container'>
                <Pagination 
                    totalData={totalData}
                    pageSize={pageSize}
                    page={page}
                    size="sm"/>
            </div>
        </>
    )
}
