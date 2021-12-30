import axios from 'axios'

async function getPosts(page) {
	try {
		return await axios.get('/api/post', { params: {page: page} })
	} catch (err) {
		console.log(err)
	}
}

async function getPost(postId) {
	try {
		return await axios.get(`/api/post/${postId}`)
	} catch (err) {
		console.log(err)
	}
}

async function createPost(postData) {
		try {
			return await axios.post('/api/post', postData)
		} catch (err) {
			console.log(err)
		}
}

async function deletePost(postId) {
		try {
			return await axios.delete(`/api/post/${postId}`)
		} catch (err) {
			console.log(err)
		}
}

async function updatePost(postId, postData) {
		try {
			return await axios.put(`/api/post/${postId}`, postData)
		} catch (err) {
			console.log(err)
		}
}

async function searchPosts(searchText) {
	try {
		return await axios.post('/api/search', { title: searchText })
	} catch (err) {
		console.log(err)
	}
}

export {
	getPosts,
	getPost,
	createPost,
	deletePost,
	updatePost,
	searchPosts
}