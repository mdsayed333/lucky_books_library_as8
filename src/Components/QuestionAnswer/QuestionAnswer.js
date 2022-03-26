import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div >
            <div className='container my-4 p-3 question2'>
                <h3>React কিভাবে কাজ করে?</h3>
                <h4>React ব্রাউজারের ডম এর মত করে আরেকটা ডম তৈরি করে। যেটাকে আমরা ভার্চুয়াল ডম বলে জানি। React দুইটা ডম তৈরি করে একটাতে আমরা ব্রাউজারে যা কিছু পরিবর্তন করি সেগুলো রাখে, আরেকটাতে পুরাতন ডাটা রাখে। আগের ডাটার সাথে নতুন ডাটার তুলনা করে কি কি পরিবর্তন করা হয়েছে সেটা খুজে বের করে। React পুরো ডমটাকে 
                পরিবর্তন না করে শুধু যে যে অংশ আপডেট করা হয়েছে সেটাকে পরিবর্তন করে। এতে ব্রাউজার অনেক দ্রুত কাজ করে।</h4>
            </div>
            <div className='container my-4 p-3 question'>
                <h3>useState কিভাবে কাজ করে?</h3>
                <h4>useState প্রথমত একটি value গ্রহন করে। আমরা যদি সেতকৃত value এর মান চেন্জ করি বা আপডেট করি 
                তখন useState কম্পোনেন্ট এর পুরো function টাকে re-run করে সেটকৃত state এর মান পুনরায় আপডেট করে।</h4>
            </div>
         
        </div>
    );
};

export default QuestionAnswer;