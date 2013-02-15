$( document ).ready( function(){
	var reshuffle = false;

	var deck = '';
	var spellDeck = '';
	var eventDeck = '';
	var remainingTime = 0;

	// Shuffle the decks.
	humanoidUnarmed.sort( function(){ return 0.5 - Math.random(); } );
	humanoidBlunt.sort( function(){ return 0.5 - Math.random(); } );
	humanoidSharp.sort( function(){ return 0.5 - Math.random(); } );
	humanoidRanged.sort( function(){ return 0.5 - Math.random(); } );
	humanoidMonster.sort( function(){ return 0.5 - Math.random(); } );
	humanoidBarrier.sort( function(){ return 0.5 - Math.random(); } );
	humanoidHiding.sort( function(){ return 0.5 - Math.random(); } );

	beastUnarmed.sort( function(){ return 0.5 - Math.random(); } );
	beastBlunt.sort( function(){ return 0.5 - Math.random(); } );
	beastSharp.sort( function(){ return 0.5 - Math.random(); } );
	beastRanged.sort( function(){ return 0.5 - Math.random(); } );
	beastMonster.sort( function(){ return 0.5 - Math.random(); } );
	beastBarrier.sort( function(){ return 0.5 - Math.random(); } );
	beastHiding.sort( function(){ return 0.5 - Math.random(); } );

	eldritchUnarmed.sort( function(){ return 0.5 - Math.random(); } );
	eldritchBlunt.sort( function(){ return 0.5 - Math.random(); } );
	eldritchSharp.sort( function(){ return 0.5 - Math.random(); } );
	eldritchRanged.sort( function(){ return 0.5 - Math.random(); } );
	eldritchMonster.sort( function(){ return 0.5 - Math.random(); } );
	eldritchBarrier.sort( function(){ return 0.5 - Math.random(); } );
	eldritchHiding.sort( function(){ return 0.5 - Math.random(); } );

	soul.sort( function(){ return 0.5 - Math.random(); } );
	blood.sort( function(){ return 0.5 - Math.random(); } );
	shriveling.sort( function(){ return 0.5 - Math.random(); } );
	bind.sort( function(){ return 0.5 - Math.random(); } );

	$( "#combatMenu" ).hide();
	$( "#attack" ).hide();
	$( "#spellMenu" ).hide();
	$( "#cast" ).hide();
	$( "#eventMenu" ).hide();
	$( "#proceed" ).hide();

	$( "#combat" ).click( function( event ){
		event.preventDefault();
		$( "#menu a" ).removeClass( "highlight" );
		$( this ).addClass( "highlight" );

		$( "#card" ).hide();
		$( "#attributeRoll" ).hide();

		$( "#combatMenu" ).fadeIn( "slow" );
		$( "#spellMenu" ).hide();
		$( "#eventMenu" ).hide();
	});

	$( "#spell" ).click( function( event ){
		event.preventDefault();
		$( "#menu a" ).removeClass( "highlight" );
		$( this ).addClass( "highlight" );

		$( "#card" ).hide();
		$( "#attributeRoll" ).hide();

		$( "#combatMenu" ).hide();
		$( "#spellMenu" ).fadeIn( "slow" );
		$( "#eventMenu" ).hide();
	});

	$( "#event" ).click( function( event ){
		event.preventDefault();
		$( "#menu a" ).removeClass( "highlight" );
		$( this ).addClass( "highlight" );

		$( "#card" ).hide();
		$( "#attributeRoll" ).hide();

		$( "#combatMenu" ).hide();
		$( "#spellMenu" ).hide();
		$( "#eventMenu" ).fadeIn( "slow" );
	});

	$( "#attribute" ).click( function( event ){
		event.preventDefault();

		$( "#attributeRoll" ).fadeOut( function(){
			$( "#attributeRoll" ).html( Math.floor( Math.random() * 10 + 1 ) );
		});
		$( "#attributeRoll" ).fadeIn( "slow" );
	});

	// Select a combat deck.
	$( "#combatDeck a" ).click( function( event ){
		event.preventDefault();

		$( "#card" ).hide();
		$( "#combatDeck a" ).removeClass( "highlight" );
		$( this ).addClass( "highlight" );
		deck = $( this ).attr( 'id' );
		$( "#attack" ).fadeIn( "slow" );
	});

	// Attack.
	$( "#attack a" ).click( function( event ){
		event.preventDefault();

		$( "#card" ).fadeOut( function(){
			$( "#card" ).html( eval( deck + upper( event.target.id ) + "[i" + upper( deck ) + upper( event.target.id ) + "]" ) );
		});
		$( "#card" ).fadeIn( "slow" );

		if( reshuffle ){
			eval( "i" + upper( deck ) + upper( event.target.id ) + " = Math.floor( Math.random() * " + deck + upper( event.target.id ) + ".length )" );
		}
		else{
			eval( "i" + upper( deck ) + upper( event.target.id ) + "++" );
			if( eval( "i" + upper( deck ) + upper( event.target.id ) + " >= " + deck + upper( event.target.id ) + ".length" ) ){ eval( "i" + upper( deck ) + upper( event.target.id ) + " = 0" ); }
		}
	});

	// Select a spell.
	$( "#spellDeck a" ).click( function( event ){
		event.preventDefault();

		$( "#spellDeck a" ).removeClass( "highlight" );
		$( this ).addClass( "highlight" );
		spellDeck = $( this ).attr( 'id' );

		$( "#card" ).hide();
		$( "#spellCard" ).hide();
		$( "#spellCard" ).html( eval( event.target.id + "Spell" ) );
		$( "#spellCard" ).fadeIn( "slow" );
		$( "#cast" ).fadeIn( "slow" );
	});

	// Cast a spell.
	$( "#cast" ).click( function( event ){
		event.preventDefault();

		$( "#card" ).fadeOut( function(){
			$( "#card" ).html( eval( spellDeck + "[i" + upper( spellDeck ) + "]" ) );
		});
		$( "#card" ).fadeIn( "slow" );

		if( reshuffle ){
			eval( "i" + upper( spellDeck ) + " = Math.floor( Math.random() * " + spellDeck + ".length )" );
		}
		else{
			eval( "i" + upper( spellDeck ) + "++" );
			if( eval( "i" + upper( spellDeck ) + " >= " + spellDeck + ".length" ) ){ eval( "i" + upper( spellDeck ) + " = 0" ); }
		}
	});

	// Select an event deck.
	$( "#eventDeck a" ).click( function( event ){
		event.preventDefault();

		$( "#eventDeck a" ).removeClass( "highlight" );
		$( this ).addClass( "highlight" );
		eventDeck = $( this ).attr( 'id' );

		iEvent = 0;
		iTime = 0;

		$( "#card" ).hide();
		$( "#proceed" ).fadeIn( "slow" );
	});

	// Time passes.
	$( "#proceed" ).click( function( event ){
		event.preventDefault();

		iTime++;
		remainingTime = eval( eventDeck + "Time[iEvent]" ) - iTime;

		$( "#card" ).fadeOut( function(){
			if( remainingTime <= 0 ){
				$( "#card" ).html( eval( eventDeck + "[iEvent]" ) );
				iTime = 0;
				iEvent++;
			}
			else{
				if( iEvent < eval( eventDeck + ".length" ) ){
					if( remainingTime > 1 ){ remainingTime += " turns remain"; } else { remainingTime += " turn remains"; }
					$( "#card" ).html( "<div>" + remainingTime + ", and then...</div><div class=\"title\">" + eval( eventDeck + "Name[iEvent]" ) + "</div>" );
				}
			}
		});
		$( "#card" ).fadeIn( "slow" );
	});

	$( "#shuffle" ).click( function( event ){
		event.preventDefault();

		if( reshuffle ){
			$( this ).removeClass( "highlight" );
			reshuffle = false;
		}
		else{
			$( this ).addClass( "highlight" );
			reshuffle = true;
		}
	});
});

function upper( string ){
	return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
}