import React from "react";
import './Blog.css'
import { Header, Footer, CommonBanner } from "../common";
import { PageNavigation } from "../Shop/Shop";
import { useDispatch, useSelector } from "react-redux";
import { apiPost } from "../../services/axios/axoisRepo";
import { updateListPost } from "../../redux/reducers/post";
import { PostImage } from "../../constants";
import { useState } from "react";

export default function Blog() {
    const dispatch = useDispatch();
    const { list, total, limit, skip } = useSelector((state) => state.post)
    const [searchText, setSearchText] = useState();

    React.useEffect(() => {
        const params = {
            params: {
                limit: limit,
            }
        }
        apiPost.getAllPost(params).then((response) => {
            dispatch(updateListPost(response.data));
        }).catch(error => {
            // setError(error);
            console.log(error);
        });
    }, [limit, dispatch]);

    function onPageClick(page) {
        const params = {
            params: {
                limit: limit,
                skip: page * limit,
            }
        }
        apiPost.getAllPost(params, searchText).then((response) => {
            dispatch(updateListPost(response.data));
        }).catch(error => {
            console.log(error);
        });
    }

    const callApi = (search) => {
        const params = {
            params: {
                limit: limit,
                skip: 0,
            }
        }
        setSearchText(search);
        apiPost.getAllPost(params, searchText).then((response) => {
            dispatch(updateListPost(response.data));
        }).catch(error => {
            console.log(error);
        });
    };
    var groundTimer = {
        handle: 0,
        start: function (text) {
            this.stop();
            this.handle = setTimeout(callApi(text), 500);
        },
        stop: function () {
            if (this.handle) {
                clearTimeout(this.handle);
                this.handle = 0;
            }
        }
    };
    function handleChange(event) {
        groundTimer.start(event.target.value);
        groundTimer.stop();
    }

    return (<>
        <Header />
        <CommonBanner pageName="Blog" />
        <div id="blog-post">
            <ListPostsComponent listPosts={list} />
            <div className="side-post-area">
                <CategoryBlogComponent handleChange={handleChange} />
                <RecentPostscomponent />
            </div>
        </div>
        <div style={{ marginBottom: "54px" }}>
            <PageNavigation length={Math.ceil(total / limit)} selected={(skip / limit)} callback={onPageClick} />
        </div>
        <Footer />
    </>
    );
}

function CategoryBlogComponent({ handleChange }) {
    return (<>
        <div className="post-category">
            <div className="search-bar">
                <input type="text" onChange={handleChange} />
                <svg className="prefix" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
        </div>
        <ul className="list-post-category">
            <div className="category-blog-header">
                Categories
            </div>
            <li className="list-post-category-item">
                <div className="category-title">
                    Crafts
                </div>
                <div className="category-total-posts">
                    2
                </div>
            </li>
            <li className="list-post-category-item">
                <div className="category-title">
                    Crafts
                </div>
                <div className="category-total-posts">
                    2
                </div>
            </li>
            <li className="list-post-category-item">
                <div className="category-title">
                    Crafts
                </div>
                <div className="category-total-posts">
                    2
                </div>
            </li>
        </ul>

    </>);
}

function RecentPostscomponent() {
    return (
        <>
            <ul className="list-recent-posts">
                <div className="category-blog-header">
                    Recent Posts
                </div>
                <li className="list-recent-posts-item">
                    <img className="sub-image-post" img="https://s120-ava-talk.zadn.vn/b/8/3/7/6/120/3dc3abc9fa061bc9f1dcca3072449373.jpg" alt="" />
                    <div className="sub-post-content">
                        <div className="sub-post-title">
                            Going all-in with millennial design
                        </div>
                        <div className="sub-post-date">
                            03 Aug 2022
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}

function ListPostsComponent({ listPosts }) {
    const rows = [];

    listPosts.map((post) =>
        rows.push(
            <li className="list-posts-item" key={post.id}>
                <img className="post-image" src={post.img || PostImage} alt={post.tag} />
                <div className="extra-detail">
                    <IconTitle child={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.99977 9.25C7.72977 9.25 7.26977 5.81 7.26977 5.81C6.99977 4.02 7.81977 2 9.96977 2C12.1298 2 12.9498 4.02 12.6798 5.81C12.6798 5.81 12.2698 9.25 9.99977 9.25ZM9.99977 11.82L12.7198 10C15.1098 10 17.2398 12.33 17.2398 14.53V17.02C17.2398 17.02 13.5898 18.15 9.99977 18.15C6.34977 18.15 2.75977 17.02 2.75977 17.02V14.53C2.75977 12.28 4.69977 10.05 7.22977 10.05L9.99977 11.82Z" fill="#9F9F9F" />
                    </svg>} title="Admin" />
                    <IconTitle child={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M1.66699 15.8334C1.66699 17.25 2.75033 18.3334 4.16699 18.3334H15.8337C17.2503 18.3334 18.3337 17.25 18.3337 15.8334V9.16669H1.66699V15.8334ZM15.8337 3.33335H14.167V2.50002C14.167 2.00002 13.8337 1.66669 13.3337 1.66669C12.8337 1.66669 12.5003 2.00002 12.5003 2.50002V3.33335H7.50033V2.50002C7.50033 2.00002 7.16699 1.66669 6.66699 1.66669C6.16699 1.66669 5.83366 2.00002 5.83366 2.50002V3.33335H4.16699C2.75033 3.33335 1.66699 4.41669 1.66699 5.83335V7.50002H18.3337V5.83335C18.3337 4.41669 17.2503 3.33335 15.8337 3.33335Z" fill="#9F9F9F" />
                    </svg>} title="14 OCt 2020" />
                    {post.tags.map((tag) =>
                        <IconTitle key={tag} child={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.8966 21.968C12.3666 21.97 11.8566 21.758 11.4826 21.382L3.64564 13.547C3.44131 13.3434 3.28363 13.0978 3.18349 12.8272C3.08335 12.5567 3.04314 12.2676 3.06564 11.98L3.56564 5.41401C3.60018 4.93599 3.80617 4.48652 4.1457 4.14827C4.48524 3.81002 4.93549 3.60574 5.41364 3.57301L11.9796 3.07301C12.0316 3.06201 12.0826 3.06201 12.1346 3.06201C12.6646 3.06201 13.1716 3.27201 13.5446 3.64801L21.3826 11.482C21.5684 11.6677 21.7158 11.8883 21.8164 12.131C21.917 12.3737 21.9687 12.6338 21.9687 12.8965C21.9687 13.1592 21.917 13.4194 21.8164 13.6621C21.7158 13.9048 21.5684 14.1253 21.3826 14.311L14.3106 21.382C14.1254 21.5683 13.905 21.716 13.6623 21.8166C13.4196 21.9172 13.1594 21.9687 12.8966 21.968ZM8.65364 6.65401C8.32475 6.65411 8.00096 6.73531 7.71094 6.89042C7.42093 7.04554 7.17364 7.26978 6.99099 7.54329C6.80834 7.8168 6.69596 8.13113 6.6638 8.45845C6.63164 8.78576 6.68069 9.11595 6.80662 9.41978C6.93255 9.72361 7.13146 9.99169 7.38574 10.2003C7.64002 10.4089 7.94181 10.5516 8.26439 10.6157C8.58698 10.6798 8.92039 10.6633 9.2351 10.5678C9.54982 10.4723 9.83611 10.3006 10.0686 10.068L10.0756 10.062L10.0826 10.055L10.0746 10.062C10.3526 9.78158 10.5414 9.42513 10.6171 9.03759C10.6928 8.65006 10.6522 8.24877 10.5002 7.88432C10.3482 7.51986 10.0918 7.20855 9.76318 6.98961C9.43457 6.77066 9.04851 6.65389 8.65364 6.65401Z" fill="#9F9F9F" />
                        </svg>} title={tag} />
                    )}
                </div>
                <div className="title">
                    {post.title}
                </div>
                <div className="description">
                    {post.body}
                </div>
                <button className="read-more">
                    Read more
                </button>
            </li >)
    )

    return (< >
        <ul className="list-posts">
            {rows}
        </ul>
    </>);
}


function IconTitle({ child, title }) {
    return (
        <div className="extra-detail-item">
            {child}
            <div className="extra-detail-title">
                {title}
            </div>
        </div>
    )
}