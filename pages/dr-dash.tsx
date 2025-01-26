import React from 'react';
import Image from 'next/image';

export default function DRDash() {
  return (
    <div
      style={{
        // Fill the entire viewport height
        height: '100vh',
        // Solid brownish background
        backgroundColor: '#C98431',
        // Use flex to allow the main area to stretch
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        fontFamily: 'Montserrat, sans-serif', // Make sure Montserrat is actually loaded
      }}
    >
      {/* Top bar with the logo */}
      <div style={{ padding: '1rem' }}>
        <Image
          src="/yamlogo.png"  // The image is in /public/yamlogo.png
          alt="Yam Logo"
          width={120}
          height={60}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      {/* Main content area (stretches to bottom) */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Gray bar for package stats */}
        <div
          style={{
            backgroundColor: '#E5E7EB',
            borderRadius: '60px',
            margin: '0 2rem',
            padding: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Row containing the two white "blurbs" */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {/* Outstanding Packages */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '60px',
                display: 'flex',
                alignItems: 'center',
                padding: '1.5rem 2rem',
                minWidth: '250px',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ marginRight: '1rem', textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold' }}>Current Outstanding Packages</div>
              </div>
              <div
                style={{
                  width: '1px',
                  height: '2rem',
                  backgroundColor: '#000',
                  margin: '0 1rem',
                }}
              />
              <div style={{ marginLeft: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>62</div>
              </div>
            </div>

            {/* Processed Packages */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '60px',
                display: 'flex',
                alignItems: 'center',
                padding: '1.5rem 2rem',
                minWidth: '250px',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ marginRight: '1rem', textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold' }}>Total Processed Packages</div>
              </div>
              <div
                style={{
                  width: '1px',
                  height: '2rem',
                  backgroundColor: '#000',
                  margin: '0 1rem',
                }}
              />
              <div style={{ marginLeft: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>427</div>
              </div>
            </div>
          </div>
        </div>

        {/* Two large gray boxes side by side, filling the rest of the page */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            margin: '0 2rem 2rem 2rem',
            gap: '2rem',
          }}
        >
          {/* Register New Package box */}
          <div
            style={{
              backgroundColor: '#E5E7EB',
              borderRadius: '60px',
              flex: 1,
              padding: '2rem',
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: '1rem', fontWeight: 'bold' }}>
              Register New Package
            </h2>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                }}
              >
                Student Name
              </label>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '60px',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <input
                  type="text"
                  placeholder="Enter name"
                  style={{
                    border: 'none',
                    outline: 'none',
                    flex: 1,
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    background: 'transparent',
                  }}
                />
                <span style={{ fontWeight: 'bold', transform: 'rotate(90deg)' }}>
                  ▾
                </span>
              </div>
              {/* Pink pill for "Name Not On List" */}
              <div
                style={{
                  backgroundColor: '#FBD4D4',
                  borderRadius: '30px',
                  textAlign: 'center',
                  marginTop: '0.75rem',
                  padding: '0.5rem 1rem',
                  color: '#000',
                }}
              >
                Name Not On List
              </div>
            </div>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#C98431',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '60px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Register
            </button>
          </div>

          {/* Retrieve Packages box */}
          <div
            style={{
              backgroundColor: '#E5E7EB',
              borderRadius: '60px',
              flex: 1,
              padding: '2rem',
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: '1rem', fontWeight: 'bold' }}>
              Retrieve Packages
            </h2>
            <div style={{ marginBottom: '1rem' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                }}
              >
                Student ID Number
              </label>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '60px',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <input
                  type="text"
                  placeholder="Enter ID"
                  style={{
                    border: 'none',
                    outline: 'none',
                    flex: 1,
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    background: 'transparent',
                  }}
                />
                <span style={{ fontWeight: 'bold', transform: 'rotate(90deg)' }}>
                  ▾
                </span>
              </div>
            </div>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#C98431',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '60px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Retrieve
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
