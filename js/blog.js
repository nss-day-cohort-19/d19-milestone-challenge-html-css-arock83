console.log("blog.js loaded");


var blogPosts = [{
	title: "Blog #1 Title",
	copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas consequat metus, sit amet congue ligula varius in. Ut luctus blandit sollicitudin. Morbi venenatis, turpis non blandit pulvinar, enim nisi posuere nisl, eget bibendum dui libero quis velit. Donec faucibus hendrerit ex, in congue orci sodales in. Cras sollicitudin semper porta. Aliquam euismod, elit consectetur aliquam egestas, leo nunc suscipit urna, vitae hendrerit enim dolor sit amet mi. Mauris blandit est ut nisi malesuada iaculis. Aliquam erat volutpat. Fusce nec diam sit amet lectus cursus hendrerit ac sit amet eros. Suspendisse diam nisl, viverra non malesuada nec, consectetur sit amet metus. Cras sed pharetra ex. Proin dapibus egestas suscipit.",
	date: "Today's Date",
},{
	title: "Blog #2 Title",
	copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas consequat metus, sit amet congue ligula varius in. Ut luctus blandit sollicitudin. Morbi venenatis, turpis non blandit pulvinar, enim nisi posuere nisl, eget bibendum dui libero quis velit. Donec faucibus hendrerit ex, in congue orci sodales in. Cras sollicitudin semper porta. Aliquam euismod, elit consectetur aliquam egestas, leo nunc suscipit urna, vitae hendrerit enim dolor sit amet mi. Mauris blandit est ut nisi malesuada iaculis. Aliquam erat volutpat. Fusce nec diam sit amet lectus cursus hendrerit ac sit amet eros. Suspendisse diam nisl, viverra non malesuada nec, consectetur sit amet metus. Cras sed pharetra ex. Proin dapibus egestas suscipit.",
	date: "Today's Date",
}];
var blogArticles = document.getElementById("blog-articles");
blogPosts.forEach(function(item){
	blogArticles.innerHTML += 	`<article class='bloggy'>
									<h3 class='bloggy-title'>${item.title}</h3>
									<p class='blogyy-copy'>${item.copy}</p>
									<p class='bloggy-date'>${item.date}</p>
								</article>`;
});