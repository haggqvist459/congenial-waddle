import React from 'react'
import { Form } from 'react-router-dom'

//library
import { UserPlusIcon } from '@heroicons/react/24/solid'


const Intro = () => {
  return (
    <div className='intro'>
        <div>
            <h1>
              <span className="accent">The Accountant</span>
            </h1>
            <p>Looks after your budget so <span className="accent bold">you</span> don't have to!</p>
            <Form method="post">
              <input type="text" name="userName" required placeholder='What is your name?' aria-label='your name' autoComplete='given-name'/>
              <input type='hidden' name='_action' value='newUser'/>
              <button type="submit" className='btn btn--dark'>
              {/* TODO: disable the create account button in the same way as the other submit buttons */}
                <span>Create Account </span>
                <UserPlusIcon width={20}/>
              </button>
            </Form>
        </div>
    </div>
  )
}

export default Intro 