import React, { Component } from "react";

import "./style.css";
import LikeItem from "../LikeItem";
import Loading from "../../../../components/Loading";

class LikeList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.removeListener = false;
  }
  render() {
    const { data, pageCount } = this.props;
    return (
      <div className="likeList" ref={this.myRef}>
        <div className="likeList__header">猜你喜欢</div>
        <div className="likeList__list">
          {data.map((item, index) => {
            return <LikeItem key={index} data={item} />;
          })}
        </div>
        {pageCount < 3 ? (
          <Loading />
        ) : (
          <a className="likeList__viewAll" href="/#">查看更多</a>
        )}
      </div>
    );
  }
  componentDidMount() {
    if (this.props.pageCount < 3) {
      document.addEventListener("scroll", this.handleScroll);
    } else {
      this.removeEventListener = true;
    }
    if (this.props.pageCount === 0) {
      this.props.fetchData();
    }
  }
  componentDidUpdate() {
    if (this.props.pageCount >= 3) {
      document.removeEventListener("scroll", this.handleScroll);
      this.removeListener = true;
    }
  }
  componentWillUnmount() {
    if (!this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
    }
  }
  // 处理屏幕滚动事件，实现加载更多的数据
  handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const screenHeight = document.documentElement.scrollHeight;
    const likeListTop = this.myRef.current.offsetTop;
    const likeListHeight = this.myRef.current.offsetHeight;
    if (scrollTop >= likeListHeight + likeListTop - screenHeight) {
      this.props.fetchData();
    }
  };
}

export default LikeList;
