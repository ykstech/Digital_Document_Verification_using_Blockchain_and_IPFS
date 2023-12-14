import React, { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';

const LoginPage = () => {
    const steps = [
        { title: 'Select Role' },
        { title: 'Enter Login Details' },
      ];
      
   // const { activeStep, setActiveStep } = useSteps({index: 0,count: steps.length,})
    const [role, setRole] = useState('');
    const [loginInfo, setLoginInfo] = useState({
    uid: '', // Extra field for the university
    name: '',
    email: '',
    password: '',
    address: '',
    cid: '', // Extra field for the company
  });

  const handleRoleSelection = (selectedRole) => {
    if(selectedRole==='') return;
    setRole(selectedRole);
   // setActiveStep(1);
    setLoginInfo({
        uid: '',
        name: '',
        email: '',
        password: '',
        address: '',
        cid: '',
      });
  };

  const handleLoginInfoChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Submitted:', loginInfo);
    // Reset form after submission
    setRole('');
    setLoginInfo({
      uid: '',
      name: '',
      email: '',
      password: '',
      address: '',
      cid: '',
    });
  };
  
  const primaryc="#1a1a1a";
  
  return (
   
   /*
      {activeStep === 0 && (
         <ScaleFade initialScale={0.95} in={activeStep === 0}>
        <FormControl>
          <FormLabel htmlFor="role">Select Role</FormLabel>
          <Select
            id="role"
            name="role"
            value={role}
            onChange={(e) => handleRoleSelection(e.target.value)}
          >
             <option value="">Select User Role</option>
            <option value="student">Student</option>
            <option value="university">University</option>
            <option value="company">Company</option>
          </Select>
        </FormControl>
        </ScaleFade>
      )}
     {activeStep === 1 && role!='' && (
         <ScaleFade initialScale={0.95} in={activeStep === 1 && role!=''}>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              value={loginInfo.name}
              onChange={handleLoginInfoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={loginInfo.email}
              onChange={handleLoginInfoChange}
            />
          </FormControl>
          
          {role === 'company' && (
            <FormControl>
              <FormLabel htmlFor="cid">Company ID</FormLabel>
              <Input
                type="text"
                id="cid"
                name="cid"
                value={loginInfo.cid}
                onChange={handleLoginInfoChange}
              />
            </FormControl>
          )}
          {role === 'university' && (
            <FormControl>
              <FormLabel htmlFor="uid">University ID</FormLabel>
              <Input
                type="text"
                id="uid"
                name="uid"
                value={loginInfo.uid}
                onChange={handleLoginInfoChange}
              />
            </FormControl>
          )}
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={loginInfo.password}
              onChange={handleLoginInfoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              type="text"
              id="address"
              name="address"
              value={loginInfo.address}
              onChange={handleLoginInfoChange}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            onClick={handleSubmit}
            disabled={!loginInfo.email || !loginInfo.password}
          >
            Submit
          </Button>
        </Stack>
        </ScaleFade>
      )}
      </Stack>
      </Box>
    //  </div>
    */
    <ToggleSwitch/>
    
  );
};

export default LoginPage;