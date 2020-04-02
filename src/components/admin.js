import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import firebase from 'gatsby-plugin-firebase';

import Rebuild from "./rebuild";

import './admin.scss';

const Admin = () => {
  const data = useStaticQuery(graphql`
    query {
      allMapPoints {
        nodes {
          approved
          ask
          address
          category
          contact
          description
          email
          id
          name
          phone
          url
          position
          title
        }
      }
    }
  `);

  const setEntryStatus = entry => {

    firebase
      .database()
      .ref('/data/' + entry.id)
      .update(entry)
      .then(() => {
        window.alert('Writing done');
      })
      .catch(e => {
        console.log('error', e);
      });

  };
  const Field = ({ value }) => {
    if (value === true || value === false) {
      return JSON.stringify(value);
    }
    return value;
  };

  const ApproveField = ({ entry }) => {
    return entry.approved ? (
      <button onClick={() => setEntryStatus( { ...entry, approved: false } )}>
        <span role="img" aria-label="remove">
          ❌
        </span>
      </button>
    ) : (
      <button onClick={() => setEntryStatus( { ...entry, approved: true } )}>
        <span role="img" aria-label="approve">
          👍
        </span>
      </button>
    );
  };

  const keySortOrder = key => {
    switch (key) {
      case 'id':
        return 1;
      case 'ask':
        return 2;
      case 'category':
        return 3;
      case 'approved':
        return 4;
      default:
        return 5;
    }
  };

  const keySort = (a, b) => {
    return keySortOrder(a) < keySortOrder(b) ? -1 : 1;
  };

  const entries = data.allMapPoints.nodes.sort((a, b) =>
    a.approved === b.approved ? 0 : b.approved ? -1 : 1
  );

  return entries.length > 0 ? (
    <>
    <table className="ui vertical segment">
      <thead>
        <tr>
          {Object.keys(entries[0])
            .sort(keySort)
            .map(key => (
              <th key={key}>{key}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {entries.map(entry => (
          <tr key={entry.id}>
            {Object.keys(entries[0])
              .sort(keySort)
              .map(key => (
                <td key={key} title={entry[key].toString()}>
                  {key === 'approved' ? (
                    <ApproveField entry={entry} />
                  ) : (
                    <Field value={entry[key]} />
                  )}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
    <Rebuild />
    </>
  ) : (
    <div>No entries yet</div>
  );
};

export default Admin;
