import mongoose from 'mongoose';

const ProfileSchema = mongoose.Schema({
    FirstName:{type:String, trim:true},
    LastName:{type:String, trim:true},
    Email:{type:String, trim:true},
    Role:{type:String, trim:true},
    ProfilePhoto:{type:String},
    LinkedIn:{type:String, default:''},
    Twitter:{type:String, default:''}
});

const Profile = mongoose.model('/Profiles',ProfileSchema);

export default Profile