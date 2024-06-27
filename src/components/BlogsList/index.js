import {Redirect} from 'react-router-dom'
import React, {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {v4 as uuidv4} from 'uuid'
import 'reactjs-popup/dist/index.css'
import Blog from '../Blog'

import {
  Container,
  Header,
  SearchInput,
  BlogList,
  BlogItem,
  Button,
  Form,
  Label,
  Input,
  TextArea,
  LogOutButton,
} from './styledBlogsList'

const initialBlogs = [
  {
    id: 1,
    title: 'The Future of AI',
    author: 'Jane Smith',
    summary:
      'An in-depth look at the potential advancements and ethical considerations in artificial intelligence.',
    publicationDate: '2023-01-15',
    content: 'Full content of The Future of AI...',
  },
  {
    id: 2,
    title: 'Sustainable Living: Tips and Tricks',
    author: 'John Doe',
    summary:
      'Practical advice for reducing your carbon footprint and living a more eco-friendly lifestyle.',
    publicationDate: '2023-02-20',
    content: 'Full content of Sustainable Living: Tips and Tricks...',
  },
  {
    id: 3,
    title: 'The Impact of Remote Work on Productivity',
    author: 'Emily Johnson',
    summary:
      'An analysis of how remote work has affected employee productivity and company culture during the pandemic.',
    publicationDate: '2023-03-10',
    content: 'Full content of The Impact of Remote Work on Productivity...',
  },
  {
    id: 4,
    title: 'A Guide to Cryptocurrency Investing',
    author: 'Michael Brown',
    summary:
      'An introductory guide to understanding and investing in cryptocurrencies.',
    publicationDate: '2023-04-05',
    content: 'Full content of A Guide to Cryptocurrency Investing...',
  },
  {
    id: 5,
    title: 'The Importance of Mental Health Awareness',
    author: 'Sarah Lee',
    summary:
      'Discusses the growing need for mental health awareness and resources in today’s society.',
    publicationDate: '2023-05-18',
    content: 'Full content of The Importance of Mental Health Awareness...',
  },
  {
    id: 6,
    title: 'Traveling Post-Pandemic: What to Expect',
    author: 'David Kim',
    summary:
      'Provides insights into how the travel industry has changed and what travelers can expect in a post-pandemic world.',
    publicationDate: '2023-06-22',
    content: 'Full content of Traveling Post-Pandemic: What to Expect...',
  },
  {
    id: 7,
    title: 'Advancements in Renewable Energy Technologies',
    author: 'Jessica White',
    summary:
      'Explores the latest technologies and innovations in the field of renewable energy.',
    publicationDate: '2023-07-30',
    content: 'Full content of Advancements in Renewable Energy Technologies...',
  },
  {
    id: 8,
    title: 'The Role of Social Media in Modern Marketing',
    author: 'Daniel Green',
    summary:
      'Analyzes the influence and strategies of social media in contemporary marketing practices.',
    publicationDate: '2023-08-12',
    content: 'Full content of The Role of Social Media in Modern Marketing...',
  },
  {
    id: 9,
    title: 'Building Resilient Supply Chains',
    author: 'Amanda Clark',
    summary:
      'Strategies for creating supply chains that can withstand disruptions and ensure continuity.',
    publicationDate: '2023-09-03',
    content: 'Full content of Building Resilient Supply Chains...',
  },
  {
    id: 10,
    title: 'The Evolution of E-Commerce',
    author: 'Matthew Lewis',
    summary:
      'A review of how e-commerce has transformed retail and consumer behavior over the past decade.',
    publicationDate: '2023-10-14',
    content: 'Full content of The Evolution of E-Commerce...',
  },
  {
    id: 11,
    title: 'Healthy Eating Habits for a Busy Lifestyle',
    author: 'Olivia Martinez',
    summary:
      'Tips and recipes for maintaining a healthy diet despite a hectic schedule.',
    publicationDate: '2023-11-22',
    content: 'Full content of Healthy Eating Habits for a Busy Lifestyle...',
  },
  {
    id: 12,
    title: 'Innovations in Education Technology',
    author: 'Kevin Robinson',
    summary:
      'An exploration of new technologies that are revolutionizing the education sector.',
    publicationDate: '2023-12-01',
    content: 'Full content of Innovations in Education Technology...',
  },
  {
    id: 13,
    title: 'Urban Gardening: Growing Food in Small Spaces',
    author: 'Sophia Turner',
    summary:
      'Guidelines and inspiration for starting an urban garden, even with limited space.',
    publicationDate: '2023-12-15',
    content: 'Full content of Urban Gardening: Growing Food in Small Spaces...',
  },
  {
    id: 14,
    title: 'The Benefits of Mindfulness and Meditation',
    author: 'Chris Harris',
    summary:
      'How incorporating mindfulness and meditation into your daily routine can improve mental health.',
    publicationDate: '2024-01-07',
    content: 'Full content of The Benefits of Mindfulness and Meditation...',
  },
  {
    id: 15,
    title: 'Exploring Renewable Energy Solutions',
    author: 'Patricia Wright',
    summary:
      'A look into various renewable energy sources and their potential to replace fossil fuels.',
    publicationDate: '2024-01-19',
    content: 'Full content of Exploring Renewable Energy Solutions...',
  },
  {
    id: 16,
    title: 'Trends in Mobile App Development',
    author: 'Alex Walker',
    summary:
      'An overview of the latest trends and technologies in mobile app development.',
    publicationDate: '2024-02-10',
    content: 'Full content of Trends in Mobile App Development...',
  },
  {
    id: 17,
    title: 'The Future of Remote Healthcare',
    author: 'Rebecca Scott',
    summary:
      'Examines how telemedicine and remote healthcare services are transforming patient care.',
    publicationDate: '2024-03-05',
    content: 'Full content of The Future of Remote Healthcare...',
  },
  {
    id: 18,
    title: 'Data Privacy in the Digital Age',
    author: 'Steven Edwards',
    summary:
      'Discusses the importance of data privacy and how individuals can protect their personal information online.',
    publicationDate: '2024-03-21',
    content: 'Full content of Data Privacy in the Digital Age...',
  },
  {
    id: 19,
    title: 'The Rise of Electric Vehicles',
    author: 'Laura Mitchell',
    summary:
      'Explores the growth of the electric vehicle market and its implications for the environment and economy.',
    publicationDate: '2024-04-15',
    content: 'Full content of The Rise of Electric Vehicles...',
  },
  {
    id: 20,
    title: 'Effective Time Management Strategies',
    author: 'Brian Anderson',
    summary:
      'Tips and techniques for managing your time effectively to boost productivity and reduce stress.',
    publicationDate: '2024-05-10',
    content: 'Full content of Effective Time Management Strategies...',
  },
]

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class BlogsList extends Component {
  state = {
    list: initialBlogs,
    status: apiStatus.initial,
    title: '',
    content: '',
    author: '',
    summary: '',
    date: '',
    searchVal: '',
  }

  deleteBlog = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(eachItem => eachItem.id !== id),
    }))
  }

  editBlog = newObj => {
    console.log(newObj)
    const {list} = this.state
    const newList = list.map(eachItem => {
      if (eachItem.id === newObj.id) {
        return {
          publicationDate: newObj.newDate,
          id: newObj.id,
          title: newObj.newTitle,
          content: newObj.newContent,
          summary: newObj.newSummary,
          author: newObj.newAuthor,
        }
      }
      return eachItem
    })
    this.setState({list: newList})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAuthorName = event => {
    this.setState({author: event.target.value})
  }

  onChangeSummary = event => {
    this.setState({summary: event.target.value})
  }

  onChangeContent = event => {
    this.setState({content: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onSubmitForm = (event, close) => {
    event.preventDefault()

    const {title, author, summary, content, date} = this.state
    const obj = {
      id: uuidv4(),
      title,
      author,
      summary,
      content,
      publicationDate: date,
    }

    this.setState(prevState => ({
      list: [...prevState.list, obj],
      title: '',
      content: '',
      author: '',
      summary: '',
    }))
    close()
  }

  onChangeSearchValue = event => {
    const search = event.target.value
    this.setState({searchVal: search})
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('token')
    history.replace('/login')
  }

  render() {
    const token = Cookies.get('token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    const {list, searchVal} = this.state
    const filteredList = list.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchVal.toLowerCase()),
    )

    return (
      <Container>
        <LogOutButton onClick={this.onClickLogout}>Logout</LogOutButton>
        <Header>Browse and Create Blogs</Header>
        <SearchInput
          type="search"
          value={searchVal}
          onChange={this.onChangeSearchValue}
          placeholder="Search blogs..."
        />
        <Popup modal trigger={<Button>Create BlogPost</Button>}>
          {close => (
            <>
              <Form onSubmit={event => this.onSubmitForm(event, close)}>
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Enter Title"
                  onChange={this.onChangeTitle}
                />
                <Label htmlFor="author">Author</Label>
                <Input
                  type="text"
                  id="author"
                  placeholder="Enter Author"
                  onChange={this.onChangeAuthorName}
                />
                <Label htmlFor="summary">Summary</Label>
                <TextArea id="summary" onChange={this.onChangeSummary} />
                <Label htmlFor="content">Content</Label>
                <TextArea id="content" onChange={this.onChangeContent} />
                <Label htmlFor="date">Date</Label>
                <Input
                  type="date"
                  id="date"
                  placeholder="Enter Date"
                  onChange={this.onChangeDate}
                />
                <Button type="submit">Add</Button>
              </Form>
            </>
          )}
        </Popup>
        <BlogList>
          {filteredList.map(eachItem => (
            <Blog
              item={eachItem}
              key={eachItem.id}
              deleteBlog={this.deleteBlog}
              editBlog={this.editBlog}
            />
          ))}
        </BlogList>
      </Container>
    )
  }
}

export default BlogsList
