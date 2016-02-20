if (Posts.find().count() === 0){
	Posts.insert({title:'baidu',url:'https://www.baidu.com'});
	Posts.insert({title:'163',url:'http://www.163.com'});
	Posts.insert({title:'sina',url:'http://www.sina.com'});
}
