import React, { useEffect } from 'react';

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
				action='https://formsubmit.co/bhasinshivam2002@gmail.com'
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
						value='https://shivam-bhasin.netlify.app/contact'
					/>
					<input type='hidden' name='_template' value='table' />
					<span className='social-media d-flex'>
						<span>
							<button type='submit' className='btn btn-lg'>
								Submit
							</button>
						</span>
						<span>
							<a
								href='https://www.linkedin.com/in/shivam-bhasin-465233166/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-linkedin-in'></i>
							</a>
							<a
								href='https://twitter.com/ShivamB52925821'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a
								href='https://github.com/ShivamBhasin2002'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-github'></i>
							</a>
							<a
								href='https://www.instagram.com/_.shivam.08/'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-instagram'></i>
							</a>
						</span>
					</span>
				</div>
			</form>
			<div className='contact-image-holder'>
				<span>
					<img
						src='https://raw.githubusercontent.com/ShivamBhasin2002/assets/personal-portfolio/contactPage/gifDark.gif'
						alt='gif'
					/>
				</span>
			</div>
		</div>
	);
};

export default Contact;
