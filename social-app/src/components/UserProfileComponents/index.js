import React from 'react';

export function UserInformation({ email }) {
	return (
		<div>
		<h1>Hello, {email}.</h1>
		<h1><span>👋</span></h1>
		<p>Welcome to EmojiBook! Click post to submit a post.</p>
		</div>

	)
}
