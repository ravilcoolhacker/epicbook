	
	const bookCardTemplate = {
		wrap: '.j-member-cards',
		tag: 'div'
		tagClass: 'member-card',
		setContent: function(member) {
			return `<h2 class="member-name">${data.name}</h2>
				<p class"member__age">Возраст: ${data.age}</p>
				<a href="${data.socialLink}" class="member__link">${data.socialName}</a>`;
		}
	}

	export default bookCardTemplate;