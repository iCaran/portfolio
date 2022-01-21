import React, { useEffect } from 'react';
import { contactPage } from '../../assets/data';

import './contact.styles.scss';

const Input = (attr) => {
	useEffect(() => {
		document.querySelector(`#${attr.id}`).addEventListener('focusin', (e) => {
			if (!e.target.value)
				document
					.querySelector(`#${attr.id}Label`)
					.classList.toggle('active-label');
		});
		document.querySelector(`#${attr.id}`).addEventListener('focusout', (e) => {
			if (!e.target.value)
				document
					.querySelector(`#${attr.id}Label`)
					.classList.toggle('active-label');
		});
	});
	return (
		<div className='box'>
			<input {...attr} autoComplete='off' />
			<label id={`${attr.id}Label`} className='label'>
				{attr.label}
			</label>
		</div>
	);
};

const Contact = () => {
	useEffect(() => {
		document.querySelector('#message').addEventListener('focusin', (e) => {
			if (!e.target.value)
				document
					.querySelector(`#messageLabel`)
					.classList.toggle('active-label');
		});
		document.querySelector('#message').addEventListener('focusout', (e) => {
			if (!e.target.value)
				document
					.querySelector(`#messageLabel`)
					.classList.toggle('active-label');
		});
		document
			.querySelector('textarea')
			.addEventListener('input', ({ target }) => {
				target.style.height = 'auto';
				target.style.height = target.scrollHeight + 'px';
			});
	});
	return (
		<div id='contact'>
			<form
				className='contact-form'
				action={contactPage.formSubmitUrl}
				method='POST'
				autoComplete='off'
			>
				<div className='inputs'>
					<span>
						<Input id='name' type='text' name='name' label='Full Name' />
						<Input id='email' type='email' name='email' label='Email Address' />
					</span>
					<Input id='subject' type='text' name='_subject' label='Subject' />
					<div className='box'>
						<textarea id='message' type='text-area' name='message' />
						<label id='messageLabel' className='label'>
							Message
						</label>
					</div>

					<input type='hidden' name='_captcha' value='false' />
					<input
						type='hidden'
						name='_next'
						value={contactPage.redirectAfterFormSubmission}
					/>
					<input type='hidden' name='_template' value='table' />
					<span className='social-media d-flex'>
						<span>
							<button type='submit' className='btn btn-lg'>
								Submit
							</button>
						</span>
						<span>
							<a href={contactPage.linkedin} target='_blank' rel='noreferrer'>
								<i className='fab fa-linkedin-in'></i>
							</a>
							<a href={contactPage.twitter} target='_blank' rel='noreferrer'>
								<i className='fab fa-twitter'></i>
							</a>
							<a href={contactPage.github} target='_blank' rel='noreferrer'>
								<i className='fab fa-github'></i>
							</a>
							<a href={contactPage.instagram} target='_blank' rel='noreferrer'>
								<i className='fab fa-instagram'></i>
							</a>
						</span>
					</span>
				</div>
			</form>
			<div className='contact-image-holder'>
				<span>
					<img src={contactPage.image} alt='gif' />
				</span>
			</div>
		</div>
	);
};

export default Contact;
