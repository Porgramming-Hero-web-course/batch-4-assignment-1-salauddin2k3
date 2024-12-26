
interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
}


const jhankarBhaiProfile = { name: "Jhankar Bhai", age: 30, email: "jhankarbhai@example.com" };

// console.log(updateProfile(jhankarBhaiProfile, { age: 36 }));
