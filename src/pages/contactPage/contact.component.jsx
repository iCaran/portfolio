import React, { useEffect } from 'react';
import { contactPage } from '../../assets/data';

const Input = (attr) => {
	useEffect(() => {
		const Listener = (e) => {
				if (!e.target.value)
					document
						.querySelector(`#${attr.id}Label`)
						.classList.toggle('active-label');
			},
			input = document.querySelector(`#${attr.id}`);
		input.addEventListener('focusin', Listener);
		input.addEventListener('focusout', Listener);
		return () => {
			input.removeEventListener('focusin', Listener);
			input.removeEventListener('focusout', Listener);
		};
	}, []);
	return (
		<div className={`${attr.width} relative inline-block my-[10px]`}>
			<input
				{...attr}
				autoComplete='off'
				className='w-[97%] py-[10px] text-[18px] text-secondaryColor mx-auto mb-[30px]  border-b border-additionalColor outline-none bg-transparent'
			/>
			<label
				id={`${attr.id}Label`}
				className='absolute top-0 left-0 py-[10px] text-[16px] text-additionalColor pointer-events-none duration-[0.5s]'
			>
				{attr.label}
			</label>
		</div>
	);
};

const Contact = () => {
	useEffect(() => {
		const Listener = (e) => {
				if (!e.target.value)
					document
						.querySelector(`#messageLabel`)
						.classList.toggle('active-label');
			},
			inputListener = ({ target }) => {
				target.style.height = 'auto';
				target.style.height = target.scrollHeight + 'px';
			},
			input = document.querySelector(`#message`);
		input.addEventListener('focusin', Listener);
		input.addEventListener('focusout', Listener);
		input.addEventListener('input', inputListener);
		return () => {
			input.removeEventListener('focusin', Listener);
			input.removeEventListener('focusout', Listener);
			input.removeEventListener('input', inputListener);
		};
	});
	return (
		<div
			id='contact'
			className='flex flex-wrap-reverse lg:h-screen bg-primaryColor'
		>
			<form
				className='flex-grow-[2]'
				action={contactPage.formSubmitUrl}
				method='POST'
				autoComplete='off'
			>
				<div className='flex flex-col h-full justify-center mx-auto w-[70%]'>
					<span className='flex flex-wrap'>
						<Input
							id='name'
							type='text'
							name='name'
							label='Full Name'
							width='flex-grow-1'
						/>
						<Input
							id='email'
							type='email'
							name='email'
							label='Email Address'
							width='flex-grow-1'
						/>
					</span>
					<span>
						<Input
							id='subject'
							type='text'
							name='_subject'
							label='Subject'
							width='w-full'
						/>
					</span>
					<div className='relative inline-block my-[10px]'>
						<textarea
							id='message'
							type='text-area'
							name='message'
							className='w-[97%] h-[100px] max-h-[300px] py-[10px] text-[18px] text-secondaryColor mx-auto mb-[30px]  border-b border-additionalColor outline-none bg-transparent overflow-y-hidden'
						/>
						<label
							id='messageLabel'
							className='absolute top-0 left-0 py-[10px] text-[16px] text-additionalColor pointer-events-none duration-[0.5s]'
						>
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
					<span className='mt-[20px] px-[10px] flex flex-wrap justify-center'>
						<span>
							<button
								type='submit'
								className='btn btn-lg rounded-[15px] bg-additionalColor text-secondaryColor px-[20px] py-[14px] mb-[20px] mr-[20px] hover:bg-secondaryColor hover:text-additionalColor'
							>
								Submit
							</button>
						</span>
						<span className='flex justify-center'>
							<a
								href={contactPage.linkedin}
								target='_blank'
								rel='noreferrer'
								className='inline-block bg-secondaryColor text-additionalColor hover:text-optionColor1 text-[40px] h-[60px] w-[60px] text-center rounded-[20px] mb-[20px] mr-[10px] duration-[0.2s]'
							>
								<i className='fab fa-linkedin-in'></i>
							</a>
							<a
								href={contactPage.twitter}
								target='_blank'
								rel='noreferrer'
								className='inline-block bg-secondaryColor text-additionalColor hover:text-optionColor1 text-[40px] h-[60px] w-[60px] text-center rounded-[20px] mb-[20px] mr-[10px] duration-[0.2s]'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a
								href={contactPage.github}
								target='_blank'
								rel='noreferrer'
								className='inline-block bg-secondaryColor text-additionalColor hover:text-optionColor1 text-[40px] h-[60px] w-[60px] text-center rounded-[20px] mb-[20px] mr-[10px] duration-[0.2s]'
							>
								<i className='fab fa-github'></i>
							</a>
							<a
								href={contactPage.instagram}
								target='_blank'
								rel='noreferrer'
								className='inline-block bg-secondaryColor text-additionalColor hover:text-optionColor1 text-[40px] h-[60px] w-[60px] text-center rounded-[20px] mb-[20px] mr-[10px] duration-[0.2s]'
							>
								<i className='fab fa-instagram'></i>
							</a>
						</span>
					</span>
				</div>
			</form>
			<div className='contact-image-holder flex flex-col flex-grow-1 h-full justify-center'>
				<span>
					<img
						src={contactPage.image}
						alt='gif'
						className='text-[100%] w-[100%] max-w-[500px] mx-auto'
					/>
				</span>
			</div>
		</div>
	);
};

export default Contact;
