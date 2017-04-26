$(document).ready(function() {
	$('.postreply').each(function() {
		var currentPostId = $(this).attr('id').substring(5);
		var replys = '';

		$('blockquote').find('[href="#'+currentPostId+'"]').each(function() {
			var replyPostId = $(this).parents('.postreply').attr('id').substring(5);
			replys = replys + '<a class="reply-link" href="#' + replyPostId + '">' + replyPostId + '</a>&nbsp;&nbsp;';
		});

		if(replys != '') {
			$(this).find('.postheader').append('<div class="post_replys">Antworten: ' + replys + '</div>');
		}
	});
	$(document).on("mouseenter", ".reply-link", function() {
		var replyId = $(this).text();
		var replyHTML = $('[id="post-'+replyId+'"]').parents('table').html();
		var replyBoxTop = $(this).offset().top;
		var replyBoxLeft = $(this).offset().left;


		$('body').append('<div class="reply-overlay" style="top:' + (replyBoxTop+13) + 'px;left:' + replyBoxLeft + 'px;"><div class="reply-overlay-inner" style="position:relative;"><table>' + replyHTML + '</table></div></div>')
	});

	$(document).on("mouseleave", ".reply-link", function() {
		$('body').find('.reply-overlay').remove();
	});
});