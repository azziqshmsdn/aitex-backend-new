import initializeDatabase from '../db';

export async function insertDataToVisitor(formData: any) {
    let connection;
    try {
      connection = await initializeDatabase();
      const [result] = await connection.execute(
        `INSERT INTO aitex_visitor 
        (firstName, lastName, registrationType, organizations, jobTitle, nationality, age, email, phone) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          formData.firstName,
          formData.lastName,
          formData.registrationType,
          formData.organizations,
          formData.jobTitle,
          formData.nationality,
          formData.age,
          formData.email,
          formData.phone
        ]
      );
      return result;
    } catch (error) {
      console.error('Error inserting data to visitor table:', error);
      throw error;
    } finally {
      if (connection) {
        await connection.end(); // Ensure the connection is closed
      }
    }
  }

export async function insertDataToConference(formData: any) {
    let connection;
    try {
      connection = await initializeDatabase();
      const [result] = await connection.execute(
        `INSERT INTO aitex_conference 
        (firstName, lastName, conferenceType, organizations, jobTitle, nationality, age, email, phone) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          formData.firstName,
          formData.lastName,
          formData.conferenceType,
          formData.organizations,
          formData.jobTitle,
          formData.nationality,
          formData.age,
          formData.email,
          formData.phone
        ]
      );
      return result;
    } catch (error) {
      console.error('Error inserting data to conference table:', error);
      throw error;
    } finally {
      if (connection) {
        await connection.end(); // Ensure the connection is closed
      }
    }
  }

  export async function insertDataToExhibitor(formData: any) {
    let connection;
    try {
      connection = await initializeDatabase();
      const [result] = await connection.execute(
        `INSERT INTO aitex_exhibitor 
        (prefix, firstName, lastName, email, companyName, jobTitle, website, businessAddress1, businessAddress2, city, stateOrProvince, postcode, country, phone, standSize, companyActivity) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          formData.prefix, 
          formData.firstName, 
          formData.lastName, 
          formData.email, 
          formData.companyName, 
          formData.jobTitle, 
          formData.website, 
          formData.businessAddress1, 
          formData.businessAddress2, 
          formData.city, 
          formData.stateOrProvince, 
          formData.postcode, 
          formData.country, 
          formData.phone, 
          formData.standSize, 
          formData.companyActivity
        ]
      );
      return result;
    } catch (error) {
      console.error('Error inserting data to exhibitor table:', error);
      throw error;
    } finally {
      if (connection) {
        await connection.end(); // Ensure the connection is closed
      }
    }
  }

  export async function insertDataToExhibitorContract(formData: any) {
    let connection;
    try {
      connection = await initializeDatabase();
      const [result] = await connection.execute(
        `INSERT INTO aitex_exhibitor_final 
        (primaryContact, organization, jobTitle, address, city, stateOrProvince, postcode, country, email, phone, boothLocation, boothSize, amount, firstPreference, secondPreference) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          formData.primaryContact, 
          formData.organization, 
          formData.jobTitle, 
          formData.address, 
          formData.city, 
          formData.stateOrProvince, 
          formData.postcode, 
          formData.country, 
          formData.email, 
          formData.phone, 
          formData.boothLocation, 
          formData.boothSize, 
          formData.amount, 
          formData.firstPreference, 
          formData.secondPreference
        ]
      );
      return result;
    } catch (error) {
      console.error('Error inserting data to exhibitor final table:', error);
      throw error;
    } finally {
      if (connection) {
        await connection.end(); // Ensure the connection is closed
      }
    }
  }

  export async function insertDataToWITA(formData: any) {
    let connection;
    try {
      connection = await initializeDatabase();
      const [result] = await connection.execute(
        `INSERT INTO wita 
        (nomineeName, awardsTitle, organisationName, organisationWebsite, organisationFounded, organisationSocialMedia, 
        billingAddress1, billingAddress2, billingAddress3, city, stateOrProvince, postcode, country, 
        contactFirstName, contactLastName, contactJobTitle, contactEmail, contactPhone, 
        additionalContactFirstName, additionalContactLastName, additionalContactJobTitle, additionalContactEmail, additionalContactPhone, 
        nomineeDescription, authorisedPersonFirstName, authorisedPersonLastName, authorisedPersonJobTitle, authorisedPersonEmail, authorisedPersonPhone) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          formData.nomineeName,
          formData.awardsTitle,
          formData.organisationName,
          formData.organisationWebsite,
          formData.organisationFounded,
          formData.organisationSocialMedia,
          formData.billingAddress1,
          formData.billingAddress2,
          formData.billingAddress3,
          formData.city,
          formData.stateOrProvince,
          formData.postcode,
          formData.country,
          formData.contactFirstName,
          formData.contactLastName,
          formData.contactJobTitle,
          formData.contactEmail,
          formData.contactPhone,
          formData.additionalContactFirstName,
          formData.additionalContactLastName,
          formData.additionalContactJobTitle,
          formData.additionalContactEmail,
          formData.additionalContactPhone,
          formData.nomineeDescription,
          formData.authorisedPersonFirstName,
          formData.authorisedPersonLastName,
          formData.authorisedPersonJobTitle,
          formData.authorisedPersonEmail,
          formData.authorisedPersonPhone,
        ]
      );
      return result;
    } catch (error) {
      console.error('Error inserting data to WITA table:', error);
      throw error;
    } finally {
      if (connection) {
        await connection.end(); // Ensure the connection is closed
      }
    }
  }