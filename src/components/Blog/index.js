import React, {Component} from 'react'
import Popup from 'reactjs-popup'
import {
  BlogItem,
  BlogTitle,
  BlogAuthor,
  BlogDate,
  BlogSummary,
  BlogContent,
  Button,
  Form,
  Label,
  Input,
  TextArea,
} from './styledBlog'

class Blog extends Component {
  state = {
    newAuthor: '',
    newTitle: '',
    newSummary: '',
    newContent: '',
    newDate: '',
  }

  onChangeTitle = event => {
    this.setState({newTitle: event.target.value})
  }

  onChangeAuthorName = event => {
    this.setState({newAuthor: event.target.value})
  }

  onChangeSummary = event => {
    this.setState({newSummary: event.target.value})
  }

  onChangeContent = event => {
    this.setState({newContent: event.target.value})
  }

  onChangeDate = event => {
    this.setState({newDate: event.target.value})
  }

  onSubmitForm = (event, close) => {
    event.preventDefault()
    const {editBlog, item} = this.props
    const {id} = item
    const {newAuthor, newSummary, newContent, newTitle, newDate} = this.state
    const newObj = {
      id,
      newAuthor,
      newContent,
      newSummary,
      newTitle,
      newDate,
    }
    editBlog(newObj)
    close()
  }

  render() {
    const {item, deleteBlog} = this.props
    const {id, author, title, summary, content, publicationDate} = item

    return (
      <BlogItem>
        <Popup
          modal
          trigger={
            <div>
              <BlogTitle>{title}</BlogTitle>
              <BlogAuthor>{author}</BlogAuthor>
              <BlogDate>{publicationDate}</BlogDate>
            </div>
          }
        >
          {close => (
            <>
              <div>
                <BlogTitle>{title}</BlogTitle>
                <BlogDate>{publicationDate}</BlogDate>
                <BlogSummary>{summary}</BlogSummary>
                <BlogContent>{content}</BlogContent>
                <BlogAuthor>{author}</BlogAuthor>
              </div>
              <Button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </Button>
            </>
          )}
        </Popup>
        <Popup modal trigger={<Button>Edit</Button>}>
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
                <Button type="submit">Edit</Button>
              </Form>
              <Button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </Button>
            </>
          )}
        </Popup>
        <Button onClick={() => deleteBlog(id)}>DELETE</Button>
      </BlogItem>
    )
  }
}

export default Blog
