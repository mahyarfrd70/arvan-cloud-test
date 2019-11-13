import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';
import articlesActions from '../../redux/articles/actions'
import Table from '../../components/table'
import AppLoading from '../../components/appLoading'
import Alert from '../../components/alert'
import buildAlertMessage from '../../helpers/buildErrorMessage'
import './style.css'

let { fetchArticlesActions } = articlesActions

let headerOptions = [
    {
        label: '#',
        key: 'index',
        rendered: (item, object, index) => <p>{index}</p>,
        style: {
            maxWidth: '50px',
            width: '5%'
        }
    },
    {
        label: 'Title',
        key: 'title',
        style: {
            maxWidth: '140px',
            width: '15%'
        }
    },
    {
        label: 'Author',
        key: 'author',
        rendered: (item, object, index) => <p>{item.username}</p>,
        style: {
            maxWidth: '100px',
            width: '10%'
        }
    },
    {
        label: 'Tags',
        key: 'tagList',
        rendered: (item, object, index) => {
            let tags = ''
            for (let tag of item) {
                tags += item.indexOf(tag) === 0 ? tag : ` , ${tag}`
            }
            return <p>{tags}</p>
        },
        style: {
            maxWidth: '200px',
            width: '25%'
        }
    },
    {
        label: 'Exerpt',
        key: 'body',
        rendered: (item, object, index) => <p>{`${item.length > 20 ? item.slice(0, 20) + "..." : item}`}</p>,
        style: {
            maxWidth: '200px',
            width: '25%'
        }
    },
    {
        label: 'Created',
        key: 'createdAt',
        rendered: (item, object, index) => <p>salam</p>,
        style: {
            maxWidth: '90px',
            width: '10%'
        }
    },
    {
        label: '',
        key: '',
        width: '',
        rendered: (item, object, index) => (
            <UncontrolledDropdown size="sm">
                <DropdownToggle className='right-toggle'>...</DropdownToggle>
                <DropdownToggle caret className='left-toggle'/>
                <DropdownMenu>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        ),
        style: {
            maxWidth: '70px',
            width: '10%'
        }
    },
]

export default function App(props) {
    let loading = useSelector(state => state.Articles.loading)
    let articlesData = useSelector(state => state.Articles.articlesData)
    let { page } = props.match.params
    let pageSize = 10
    let dispatch = useDispatch()
    let fetchArticlesData = async (pageSize, page) => {
        try {
            await dispatch(fetchArticlesActions(pageSize, page ? page : 1))
        } catch (err) {
            Alert.show('danger', buildAlertMessage({ "Fetch Failed": "Internal Server Error" }))
        }
    }
    useEffect(() => {
        fetchArticlesData(pageSize, page)
    }, [props.match.params.page])

    return (
        <AppLoading loading={loading}>
            <h3>All Posts</h3>
            <Table
                pageSize={pageSize}
                headerOptions={headerOptions}
                data={articlesData.articles}
                page={page ? page : 1}
                totalData={articlesData.articlesCount} />
        </AppLoading>
    )
}
