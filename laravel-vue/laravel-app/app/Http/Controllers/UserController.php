<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        /* $this->middleware('auth:sanctum')->only(['logout', 'show']); */
    }

    /**
     * Handle an authentication attempt.
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            
            return new UserResource($request->user());
        }

    }

    /**
     * Log the user out of the application.
     */
    public function logout(Request $request)
    {
        // Auth::logout();

        // $request->session()->invalidate();

        // $request->session()->regenerateToken();

        Auth::guard('web')->logout();

        // $request->session()->invalidate();

        // $request->session()->regenerateToken();

        // $request->user()->currentAccessToken()->delete();

        // auth('sanctum')->user()->tokens()->delete();

        return response()->noContent(200);
    }

    /**
     * Creates the user on the database.
     */
    public function register(CreateUserRequest $request)
    {
        $credentials = $request->validated();

        $user = User::create($credentials);

        Auth::login($user);
        $request->session()->regenerate();

        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        /* return new UserResource($request->user()); */
        return new UserResource(User::where('id', 1)->first());
    }
}
